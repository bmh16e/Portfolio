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
    // skills: [
    //   'React',
    //   'React Native',
    //   'TypeScript',
    //   'JavaScript',
    //   'NodeJS',
    //   'MySQL',
    //   'Oracle',
    //   '.NET',
    //   'C#',
    //   'Entity Framework',
    //   'LINQ',
    //   'AWS',
    //   'Storybook',
    //   'Chromatic',
    //   'Jest',
    //   'Jira'
    // ],
    divider: true,
    summary: `Partner with a team of 10+ developers and business analysts to develop secure web applications, applying ReactJS and .NET
    Core. Utilize NodeJS and Typescript to build RESTful APIs, enabling completion of a variety of user tasks. Formulate Jest
    
    unit tests and incorporate GitHub Actions into development processes to advance testing workflows. Assist Kikoda's ever-
    evolving services by implementing end-to-end solutions and delivering high-quality code on strict deadlines.`,
    subEntries: [
      {
        subTitle: 'Bill Pay Application',
        subSkills: ['React', 'NodeJS', 'TypeScript'],
        subBulletPoints: [
          'Spearhead effort to develop a cross-platform application in React-Native targeting iOS, android, and web',
          'Communicate directly with stakeholders to gather feature requirements and present technical solutions based on user needs',
          'Develop REST APIs leveraging TypeScript and NodeJS to enable end users to perform a range of common application flows including registration and login',
          'Formulate Jest unit tests and incorporate GitHub Actions into development processes to advance testing workflows'
        ]
      },
      {
        subTitle: 'Mobile App Development',
        subSkills: ['React Native', 'NodeJS', 'TypeScript', 'AWS', 'Jest'],
        subBulletPoints: [
          'Develop REST APIs leveraging TypeScript and NodeJS to enable end users to perform a range of common application flows including registration and login',
          'Formulate Jest unit tests and incorporate GitHub Actions into development processes to advance testing workflows',
          'Streamline business processes by building an application using ReactJS to allow over 50,000 end users to conveniently search for and pay bills',
          'Work with an agile team of 10+ developers to develop full-stack applications using ReactJS, .NET Core, and MySQL',
          'Improve code quality and application performance by utilizing C#, Entity Framework, and LINQ to replace outdated Oracle stored procedures'
        ]
      }
    ]
  },
  {
    title: 'Publix',
    subtitle: 'Customer Service Staff',
    dates: '2012 - 2022',
    skills: ['Customer Service', 'Leadership', 'Communication', 'Problem Solving', 'Management'],
    bulletPoints: [
      'Monitored customer service department front end to guarantee quality service levels for customers',
      'Interacted with customers daily to address complaints and provide premier customer service in a fast-paced environment',
      'Coordinated schedules of over 20 associates at a time to ensure daily operations ran smoothly and efficiently',
      'Trained and supervised new Customer Service Staff to ensure they were equipped to perform their jobs properly'
    ]
  }
];
