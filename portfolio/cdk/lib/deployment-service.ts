import { Construct } from "constructs";
import { CfnOutput, RemovalPolicy } from "aws-cdk-lib";
import { Distribution, ViewerProtocolPolicy, OriginAccessIdentity, SecurityPolicyProtocol, AllowedMethods } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { BlockPublicAccess, Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import * as route53 from 'aws-cdk-lib/aws-route53';
import { CanonicalUserPrincipal, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Certificate, CertificateValidation } from "aws-cdk-lib/aws-certificatemanager";
import * as targets from 'aws-cdk-lib/aws-route53-targets';

const path = './resources/build';
const SITE_DOMAIN = 'www.benhybart.com';

export class DeploymentService extends Construct {
    constructor(scope: Construct, id: string) {
        super(scope, id);

        const zone = route53.HostedZone.fromLookup(this, 'Zone', {
            domainName: 'benhybart.com'
        });

        const cloudfrontOAI = new OriginAccessIdentity(this, 'cloudfront-OAI', {
            comment: `OAI for PortfolioBucket`
          });
        
        const bucket = new Bucket(this, 'PortfolioBucket', {
            removalPolicy: RemovalPolicy.DESTROY,
            publicReadAccess: false,
            blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
            autoDeleteObjects: true,
        });

         // Grant bucket access to cloudfront
        bucket.addToResourcePolicy(new PolicyStatement({
            actions: ['s3:GetObject'],
            resources: [bucket.arnForObjects('*')],
            principals: [new CanonicalUserPrincipal(cloudfrontOAI.cloudFrontOriginAccessIdentityS3CanonicalUserId)]
        }));

        // Create certificate
        const certificate = new Certificate(this, 'SiteCertificate', {
            domainName: SITE_DOMAIN,
            validation: CertificateValidation.fromDns(zone),
        });

        // Create cloudfront distribution
        const distribution = new Distribution(this, 'PortfolioDistribution', {
            certificate: certificate,
            domainNames: [SITE_DOMAIN],
            defaultRootObject: 'index.html',
            minimumProtocolVersion: SecurityPolicyProtocol.TLS_V1_2_2021,
            defaultBehavior: {
                origin: new S3Origin(bucket, {originAccessIdentity: cloudfrontOAI}),
                compress: true,
                allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            },
        });

        // Create Route53 A Record
        new route53.ARecord(this, 'SiteAliasRecord', {
            recordName: SITE_DOMAIN,
            target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
            zone: zone,
        });

        new BucketDeployment(this, 'PortfolioBucketDeployment', {
            sources: [Source.asset(path)],
            destinationBucket: bucket,
            distribution,
            distributionPaths: ['/*']
        });

        new CfnOutput(this, 'CloudFrontURL', {
            value: distribution.domainName,
            description: 'The distribution URL',
            exportName: 'CloudfrontURL',
        });

        new CfnOutput(this, 'BucketName', {
            value: bucket.bucketName,
            description: 'The name of the S3 bucket',
            exportName: 'BucketName',
        });
    }

};