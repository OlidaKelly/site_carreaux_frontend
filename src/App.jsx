import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage'
import FertilizerPage from './pages/FertilizerPage/FertilizerPage'
import TilePage from './pages/TilePage/TilePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import Navbar from './components/NavBar/Navbar';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/fertilizers" element={<FertilizerPage/>} />
        <Route path="/tiles" element={<TilePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
