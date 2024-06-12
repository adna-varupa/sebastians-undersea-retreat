import React from 'react';
import '../../App.css'; 
import './LandingPage.css'
import NavBar from '../../components/NavBar'
import VideoSection from '../../components/VideoSection'
import AnimalEncounter from '../../components/AnimalEncounter'
import InformationSection from '../../components/InformationSection'
import ConservationSection from '../../components/ConservationSection'
import Footer from '../../components/Footer'

function LandingPage () {
    return(
        <div className='landing-container'>
        <NavBar />
        <VideoSection />
        <AnimalEncounter />
        <InformationSection />
        <ConservationSection />
        <Footer />
        </div>
    )
}

export default LandingPage;