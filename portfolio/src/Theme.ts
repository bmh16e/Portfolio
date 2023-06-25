import { createTheme } from '@mui/material';
import '@fontsource/metropolis';
import '@fontsource/lekton';
import '@fontsource/roboto';
import '@fontsource-variable/roboto-mono';

const Theme = createTheme({
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
      fontFamily: 'Roboto Mono Variable'
    },
    subtitle2: {
      fontWeight: 300,
      fontFamily: 'metropolis'
    },
    body1: {
      fontFamily: 'Roboto Mono Variable'
    },
    body2: {
      fontFamily: 'lekton'
    }
  }
});

export default Theme;
