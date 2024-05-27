import React from 'react';
import AboutUs from './components/pages/AboutUs';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/LandingPage'


function App() {
  return (
    <>
    <Router>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/aboutus" element={<AboutUs />} />
     </Routes>
     </Router>
    </>
  );
}

export default App;
