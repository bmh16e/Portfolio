import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './modules/Layout';
import Theme from './Theme';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Experience } from './pages/Experience';

function App() {
  return (
    <ThemeProvider theme={Theme}>
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
  );
}

export default App;
