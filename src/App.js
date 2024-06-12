import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Register from './pages/Registration/RegistrationSite';
import './App.css';

function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/register" element={<Register />} />
     </Routes>
     </Router>
  );
}

export default App;
