import { languageMapping } from '../components/Chip';

export type ExperienceEntry = {
  title: string;
  subtitle?: string;
  skills?: (keyof typeof languageMapping)[];
  dates?: string;
  bulletPoints?: string[];
  divider?: boolean;
  summary?: string;
  id?: string;
  subEntries?: SubEntry[];
};

type SubEntry = {
  subTitle: string;
  subBulletPoints: string[];
  subSkills?: (keyof typeof languageMapping)[];
};

export const experienceEntries: ExperienceEntry[] = [
  {
    title: 'Kikoda',
    subtitle: 'Software Engineer',
    dates: '2019 - Present',
    divider: true,
    summary: `In my 4 years at Kikoda, I have had the opportunity to work on a variety of projects, including both mobile and web applications. I have worked as a full-stack engineer on each of the teams I've been a part of and have gained valuable experience in a wide range of technologies and frameworks. Through developing custom software solutions for Kikoda's clients, I have become comfortable working in fast-paced environments and learned to quickly adapt to new technologies and challenges.
`,
    subEntries: [
      {
        subTitle: 'Cross-Platform Mobile Application',
        subSkills: [
          'React Native',
          'NodeJS',
          'REST',
          'TypeScript',
          'Storybook',
          'Chromatic',
          'AWS',
          'Github Actions',
          'Jest'
        ],
        subBulletPoints: [
          'Spearhead effort to develop a cross-platform application in React-Native, targeting iOS and Android',
          'Configure Cognito User Pools through AWS Cloud Development Kit to facilitate app user management',
          `Develop AWS Lambda functions in Typescript, enabling end users to perform authentication flows such as app
          registration and login`,
          `Leverage Storybook and Chromatic to promote component-driven development and provide automatic UI testing to
          prevent regressions`,
          `Formulate Jest unit tests and incorporate GitHub Actions into development processes to advance testing workflows`
        ]
      },

      {
        subTitle: 'Insurance Web Application',
        subSkills: [
          'C#',
          '.NET',
          'Oracle',
          'Entity Framework',
          'LINQ',
          'MySQL',
          'ReactJS',
          'TypeScript'
        ],
        subBulletPoints: [
          `Communicate directly with stakeholders to gather feature requirements and present technical solutions based on user needs`,
          `Work with an agile team of 10+ developers to develop full-stack applications using ReactJS, .NET Core, and MySQL`,
          `Employ skills in ReactJS and Bootstrap to develop responsive web pages, enabling users to perform data entry and
          accomplish complex business workflows`,
          `Improve code quality and application performance by utilizing C#, Entity Framework, and LINQ to replace outdated
          Oracle stored procedures`
        ]
      },
      {
        subTitle: 'Bill Payment Application',
        subSkills: ['ReactJS', 'NodeJS', 'TypeScript', 'Storybook'],
        subBulletPoints: [
          `Streamline business processes by building an application using ReactJS to allow over 50,000 end users to conveniently
          search for and pay bills`,
          `Parse input using regular expressions to allow users to find bills by entering a variety of search terms`,
          `Enhance user experience by providing a seamless integration with a third-party merchant processor to collect payment details`
        ]
      }
    ]
  },
  {
    title: 'Publix',
    dates: '2012 - 2022',
    subtitle: 'Customer Service Staff',
    summary: `I spent approximately 10 years working in customer service at Publix. 
    While the first few years were spent as a bagger/cashier, I spent most of my time at Publix as a supervisor.
    As a supervisor in customer service, I was responsible for a number of things, 
    including managing the front end of the store, training new associates, and assisting customers with a variety of needs.
    During this time, I learned a lot about leadership, and I developed strong problem solving and communication skills that I have 
    carried with me throughout my career.`,
    subEntries: [
      {
        subTitle: 'Front End Coordinator',
        subSkills: [
          'Customer Service',
          'Leadership',
          'Teamwork',
          'Communication',
          'Problem Solving',
          'Management'
        ],
        subBulletPoints: [
          'Monitored customer service department front end to guarantee quality service levels for customers',
          'Interacted with customers daily to address complaints and provide premier customer service in a fast-paced environment',
          'Coordinated schedules of over 20 associates at a time to ensure daily operations ran smoothly and efficiently'
        ]
      },
      {
        subTitle: 'Customer Service Desk Associate',
        subSkills: ['Customer Service', 'Teamwork', 'Communication', 'Problem Solving'],
        subBulletPoints: [
          `Worked customer service front desk to assist customers with a variety of needs such as product refunds, money services, and lottery sales`,
          'Trained and supervised new Customer Service Staff to ensure they were equipped to perform their jobs properly'
        ]
      },
      {
        subTitle: 'Cash Office Closer/Opener',
        subSkills: ['Accounting', 'Problem Solving'],
        subBulletPoints: [
          `Expertly balanced the cash office to verify all monetary assets were accounted for and matched the appropriate reports`,
          `Prepared bank deposits of over $30,000 in cash to maintain the mimimum amount needed for store operations`
        ]
      }
    ]
  }
];
