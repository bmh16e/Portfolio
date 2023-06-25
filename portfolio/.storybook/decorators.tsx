import React from 'react';
import { Decorator } from '@storybook/react';
import { ThemeProvider } from '@mui/material';
import Theme from '../src/Theme';
import { Layout } from '../src/modules/Layout';

export const ThemeProviderDecorator: Decorator = (StoryFn) => {
  return <ThemeProvider theme={Theme}>{StoryFn()}</ThemeProvider>;
};

export const LayoutDecorator: Decorator = (StoryFn) => {
  return <Layout>{StoryFn()}</Layout>;
};
