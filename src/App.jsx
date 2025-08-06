import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SkillsPage from './components/SkillsPage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/skills' element={<SkillsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;