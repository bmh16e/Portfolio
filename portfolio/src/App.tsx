import React, { useMemo } from 'react';
import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
import { Layout } from './modules/Layout';
import { Theme, ColorModeContext, getDesignTokens } from './Theme';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';

function App() {
  const [isDarkTheme, setDarkTheme] = useLocalStorage('darkTheme', true);

  const [colorMode, setColorMode] = React.useState<PaletteMode>(isDarkTheme ? 'dark' : 'light');

  const mode = useMemo(
    () => ({
      colorMode,
      setColorMode: () => {
        setColorMode((prevMode) => {
          setDarkTheme(prevMode === 'light');
          return prevMode === 'light' ? 'dark' : 'light';
        });
      }
    }),
    [colorMode]
  );

  const palette = getDesignTokens(colorMode);
  const theme = createTheme({ ...Theme, ...palette });

  return (
    <ColorModeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </Router>
        </Layout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
