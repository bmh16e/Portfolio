import React from 'react';
import {Decorator} from '@storybook/react';
import {ThemeProvider} from '@mui/material';
import Theme from '../src/Theme';

export const ThemeProviderDecorator: Decorator = StoryFn => {
    return (
        <ThemeProvider theme={Theme}>
            {StoryFn()}
        </ThemeProvider>
    );
};