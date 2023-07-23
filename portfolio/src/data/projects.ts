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
    summary: 'The development details of this website',
    id: 'portfolio',
    skills: ['React', 'AWS', 'CDK', 'Storybook', 'TypeScript'],
    bulletPoints: [
      'Built a portfolio website using React and Material UI',
      'Leveraged Storybook to develop and test components in isolation to promote reusability and maintainability',
      'Used AWS CDK to setup a new Cloudfront Distribution and deploy the website to AWS S3'
    ],
    divider: true,
    image: storybookImg
  },
  {
    title: 'Geohashing Game App',
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
    divider: true,
    id: 'tunemover',
    skills: ['Python'],
    bulletPoints: [
      'Worked as part of a team to develop a music transfer application for copying music between Google Play Music and Spotify',
      'Assisted in development of Python module to support retrieval and insertion of appropriate song, artist, and playlist data to and from a user`s Google Play Music Library'
    ],
    image: abstractMusicImg
  },
  {
    title: 'Warehouse Wreckage',
    summary: 'A small game developed using C++ and Unreal Engine 5',
    id: 'unreal',
    skills: ['C++', 'Unreal Engine'],
    bulletPoints: [
      'Used C++ and Unreal Engine to build a game, based on physics, that allows a user to launch a finite number of projectiles at various objects in a warehouse building',
      'Implemented ammo tracking to limit the number of projectiles a user can launch and provide that information to the user in real time',
      'Incorporated physics into the environment to allow for realistic interactions between objects in the game as the user launches projectiles at them'
    ],
    divider: true,
    image: unrealImg
  },
  {
    title: 'FAT32 OpSys Project',
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
    summary: 'A collection of projects developed using C++ data structures and algorithms',
    skills: ['C++'],
    bulletPoints: [
      'Leveraged iterators, generic types, and move semantics to build a doubly linked list class in C++ following the version in the Standard Template Library',
      'Developed a C++ application to collect statistics of word, number, and character usage in a given file using STL data structures'
    ],
    image: algorithmsImg
  }
];
