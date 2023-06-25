import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './modules/Layout';
import Theme from './Theme';
import { Home } from './pages/Home';
import { About } from './pages/About';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
