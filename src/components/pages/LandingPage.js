import React from 'react';
import '../../App.css'
import NavBar from '../NavBar'
import VideoSection from '../VideoSection'
import AnimalEncounter from '../AnimalEncounter'
import InformationSection from '../InformationSection'
import ConservationSection from '../ConservationSection'
import Footer from '../Footer'

function LandingPage () {
    return(
        <>
        <NavBar />
        <VideoSection />
        <AnimalEncounter />
        <InformationSection />
        <ConservationSection />
        <Footer />
        </>
    )
}

export default LandingPage;