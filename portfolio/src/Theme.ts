import { createContext } from 'react';
import { PaletteMode } from '@mui/material';
import '@fontsource/lekton';
import '@fontsource/roboto';
import '@fontsource-variable/roboto-mono';

export const ColorModeContext = createContext({
  colorMode: '',
  setColorMode: () => {}
});

export const getDesignTokens = (mode: PaletteMode) => ({
  ...(mode === 'dark'
    ? {
        palette: {
          mode,
          background: {
            default: 'rgba(7, 22, 35, 1)'
          },
          primary: {
            main: '#265C8C'
          },
          secondary: {
            main: '#FFFFFF'
          }
        },
        components: {
          MuiPaper: {
            styleOverrides: {
              root: {
                background: 'rgba(7, 22, 35, 1)',
                backgroundImage:
                  'linear-gradient(rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))'
              }
            }
          }
        }
      }
    : {})
});

export const Theme = {
  palette: {
    primary: {
      main: '#265C8C'
    },
    secondary: {
      main: '#FFFFFF'
    }
  },

  typography: {
    h1: {
      fontFamily: 'Roboto Mono Variable',
      fontSize: '3.75rem'
    },
    h4: {
      fontFamily: 'Roboto Mono Variable',
      fontWeight: 500,
      fontSize: '2rem'
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: '3.2rem'
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.3rem',
      fontFamily: 'Roboto Mono Variable'
      // letterSpacing: '0.001rem'
    },
    body1: {
      fontSize: '1.1rem'
    },
    body2: {
      fontFamily: 'lekton',
      fontSize: '1.9rem'
    }
  }
};

export default Theme;
