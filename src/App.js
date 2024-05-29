import React from 'react';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import LoginRegister from './pages/LoginRegister/LoginRegister';
import Register from './pages/Registration/RegistrationSite';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage'


function App() {
  return (
    <Router>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<LoginRegister />} />
      <Route path="/register" element={<Register />} />
     </Routes>
     </Router>
  );
}

export default App;
