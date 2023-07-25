import { languageMapping } from '../components/Chip';

const unrealImg = require('../Assets/static/images/Unreal_Engine.jpg') as string;
const abstractMusicImg = require('../Assets/static/images/Abstract_Music.jpeg') as string;
const storybookImg = require('../Assets/static/images/Storybook.jpg') as string;
const algorithmsImg = require('../Assets/static/images/Algorithms.jpeg') as string;
const mapsImg = require('../Assets/static/images/Maps.jpeg') as string;
const cCodeImg = require('../Assets/static/images/CCode.jpeg') as string;

export type ProjectEntry = {
  title: string;
  subtitle?: string;
  skills?: (keyof typeof languageMapping)[];
  dates?: string;
  bulletPoints: string[];
  divider?: boolean;
  summary?: string;
  id?: string;
  image?: string;
  subEntries?: SubEntry[];
};

type SubEntry = {
  subTitle: string;
  subBulletPoints: string[];
  subSkills?: (keyof typeof languageMapping)[];
};

export const projectEntries: ProjectEntry[] = [
  {
    title: 'Portfolio',
    summary: `My Portfolio project is the website you're currently viewing! 
    I chose React for this website as it's the JavaScript library I'm most comfortable with. 
    This allowed me the to focus on building a clean, responsive experience without being concerned with understanding
    the language features of something I'm less familiar with.`,
    id: 'portfolio',
    skills: ['ReactJS', 'Storybook', 'TypeScript', 'AWS', 'CDK'],
    bulletPoints: [
      'Built a portfolio website using ReactJS and TypeScript to showcase projects and experience',
      `Selected Material UI as the component library to leverage its pre-built components and styling to expedite the development process`,
      'Leveraged Storybook to develop and test custom components in isolation to promote reusability and maintainability',
      `Incorporated ReactJS hooks and context to manage state and user preferences such as dark vs light mode`,
      'Used AWS CDK to setup a new Cloudfront Distribution and deploy the website to AWS S3'
    ],
    divider: true,
    image: storybookImg
  },
  {
    title: 'Geohashing Android App',
    summary: `This project was my first foray into developing android applications in Java. 
    I worked with a small team on this project to build a location-based, game app that used the Google Maps API.`,
    skills: ['Java', 'Firebase', 'Android'],
    divider: true,
    bulletPoints: [
      'Worked with a team to build a “Geohashing” android application in Java that allowed users to create games where they race to a location provided on the map on their phone',
      'Assisted in the creation and setup of fragments in the app to facilitate a modular design',
      'Enhanced user experience by adding fragment transition animations and options to dynamically change the color theme of the app'
    ],
    image: mapsImg
  },
  {
    title: 'Tune Mover App',
    summary: `Tune Mover was developed as a project for my software engineering course as FSU. 
    To this day, it is still one of my favorite applications I've had a hand in building. 
    I gained valuable experience learning to work with a team of developers 
    while simultaneously creating a rewarding product.`,
    divider: true,
    skills: ['Python'],
    bulletPoints: [
      'Worked as part of a team to develop a music transfer application for copying music between Google Play Music and Spotify',
      'Aided in development of Python module to support retrieval and insertion of appropriate song, artist, and playlist data to and from a user`s Google Play Music Library',
      `Assisted in integration of UI with core application functionality`
    ],
    image: abstractMusicImg
  },
  {
    title: 'Warehouse Wreckage',
    summary: `I am currently learning game development in my free time. 
    This project is one of the first games I've built using C++ and Unreal Engine 5. 
    In the future, I hope to build on this experience and develop more sophisticated games.`,
    id: 'unreal',
    skills: ['C++', 'Unreal Engine'],
    bulletPoints: [
      'Used C++ and Unreal Engine to build a game, based on physics, that allows a user to launch a finite number of projectiles at various objects in a warehouse building',
      'Implemented ammo tracking to limit the number of projectiles a user can launch and provide that information to the user in real time',
      'Incorporated physics into the environment to allow for realistic interactions between objects in the game as the user shoots projectiles at them'
    ],
    divider: true,
    image: unrealImg
  },
  {
    title: 'FAT32 OpSys Project',
    summary: `
    This project was both extremely difficult and time consuming. 
    Though relatively simple to use,
    the 1,000 lines of C code required to complete this project were anything but simple.
    It did, however, provide me with great experience using a low-level language like C to interact with file systems.`,
    divider: true,
    skills: ['C', 'Unix'],
    bulletPoints: [
      'Wrote an application to support file system commands delivered to a FAT32 image file',
      'Allowed user to type Unix-style commands, such as cd, mkdir, rmdir, at a prompt, which were then executed against the FAT32 file'
    ],
    image: cCodeImg
  },
  {
    title: 'Data Structures',
    summary: `This entry includes a few smaller projects I built in C++. 
    While I have yet to build large scale applications with it,
    I have a lot of experience with C++ data structures and algorithms,
    and I'm looking forward to using it more in the near future.
    `,
    skills: ['C++'],
    bulletPoints: [
      'Leveraged iterators, generic types, and move semantics to build a doubly linked list class in C++ following the version in the Standard Template Library',
      'Developed a C++ application to collect statistics of word, number, and character usage in a given file using STL data structures such as maps and sets'
    ],
    image: algorithmsImg
  }
];
