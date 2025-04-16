import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import './media.css';
import Homepage from './pages/Homepage';
import Aboutme from './pages/Aboutme';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
