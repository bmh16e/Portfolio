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
      fontFamily: 'Roboto Mono Variable'
    },
    subtitle2: {
      fontWeight: 300
    },
    body1: {
      fontSize: '1.3rem'
    },
    body2: {
      fontFamily: 'lekton',
      fontSize: '1.2rem'
    }
  }
});

export default Theme;
