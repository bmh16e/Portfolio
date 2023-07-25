import React from 'react';
import { Chip as MuiChip, SxProps, Theme } from '@mui/material';
import { ColorModeContext } from '../Theme';

export interface ChipProps {
  label: keyof typeof languageMapping;
  mr?: number;
  ml?: number;
  my?: number;
}

export const Chip: React.FC<ChipProps> = ({ label, mr, ml, my }) => {
  const { colorMode } = React.useContext(ColorModeContext);

  const darkStyles: SxProps<Theme> = {
    borderColor: languageMapping[label],
    color: languageMapping[label]
  };

  const lightStyles: SxProps<Theme> = { bgcolor: languageMapping[label], color: 'white' };

  const style = colorMode === 'dark' ? darkStyles : lightStyles;

  return (
    <MuiChip
      variant={colorMode === 'dark' ? 'outlined' : 'filled'}
      label={label}
      sx={{
        fontSize: 14,
        minWidth: 60,
        mr: mr,
        ml: ml,
        my: my,
        ...style
      }}
    />
  );
};

export const languageMapping = {
  'C++': '#f34c7e',
  C: '#8e44ad',
  'C#': '#188601',
  Java: '#af7219',
  JavaScript: '#f0e259',
  Python: '#3573a7',
  TypeScript: '#3179c7',
  'Unreal Engine': '#29ABCA',
  Oracle: '#ef7b09',
  MySQL: '#62a8d7',
  ReactJS: '#6aad64',
  Firebase: '#ffcb2b',
  Android: '#3ddc84',
  NodeJS: '#5bceda',
  'React Native': '#3be235',
  '.NET': '#4cd660',
  Storybook: '#e9967a',
  Leadership: '#80cbc4',
  Communication: '#29abca',
  Management: '#a29bfe',
  Teamwork: '#f3683b',
  Accounting: '#e3a83b',
  'Problem Solving': '#de30cb',
  'Customer Service': '#9d38bd',
  Unix: '#4285f4',
  AWS: '#ff4081',
  CDK: '#c45b50',
  Cognito: '#d66b50',
  Lambda: '#ff4a4a',
  'API Gateway': '#cf5b50',
  'Entity Framework': '#ff4a4a',
  LINQ: '#a9d581',
  REST: '#12f4ce',
  Jest: '#46d4f3',
  'Github Actions': '#718cbe',
  Chromatic: '#f3683b',
  Jira: '#f9d470'
};
