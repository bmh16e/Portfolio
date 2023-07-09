import { createTheme } from '@mui/material';
import '@fontsource/lekton';
import '@fontsource/roboto';
import '@fontsource-variable/roboto-mono';

const Theme = createTheme({
  palette: {
    background: {
      // paper: 'rgb(237, 237, 237)'
    },
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
});

export default Theme;
