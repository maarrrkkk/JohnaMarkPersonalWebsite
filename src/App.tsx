/* eslint-disable @typescript-eslint/no-unused-vars */
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './media.css';
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Thesis from './pages/Thesis';
import Projects from './pages/Projects';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
