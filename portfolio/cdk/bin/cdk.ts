#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PortfolioCdkStack } from '../lib/portfolio-cdk-stack';

const app = new cdk.App();
new PortfolioCdkStack(app, 'PortfolioCdkStack', {
    env: {
        region: process.env.CDK_DEFAULT_REGION,
        account: process.env.CDK_DEFAULT_ACCOUNT,
    }
});