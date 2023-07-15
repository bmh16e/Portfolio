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
  C: '#555555',
  'C#': '#188601',
  Java: '#af7219',
  JavaScript: '#f0e259',
  Python: '#3573a7',
  TypeScript: '#3179c7',
  'Unreal Engine': '#a64d4d',
  Orcale: '#ef7b09',
  MySQL: '#62a8d7',
  React: '#6aad64',
  'Node.js': '#5ee600',
  'React Native': '#3be235',
  '.NET': '#188601',
  Storybook: '#ff4a4a',
  LeaderShip: '#ff4a4a',
  Communication: '#ff4a4a',
  Management: '#ff4a4a',
  'Problem Solving': '#ff4a4a',
  'Customer Service': '#ff4a4a'
};
