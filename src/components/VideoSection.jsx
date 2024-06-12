import React from 'react';
import { Link } from 'react-router-dom';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <div id="video-main-container" className="w-100">
        <video id="hp-video" className="w-100" autoPlay muted loop playsInline aria-describedby="hp-video-description">
            <source src="https://www.aquariumofpacific.org/multimedia_files/video/AnniversaryUpdate.mp4" type="video/mp4"/>
        </video>
        <div id="hp-video-description" className="sr-only">
            A video with no sound.
        </div>
        <div id="video-overlay-container">
            <div className="rich-text">
                <div>
                    <div>
                        <h2>
                            <small>PLAN YOUR AQUARIUM VISIT</small>
                            <span>We'd Love to See You!</span>
                        </h2>
                        <p id="font">From easy timed entry to tours and experiences, your Aquarium experience is just a few clicks away.</p>
                        <nav>
                            <div className="buy-button">
                                {/* Link za kupovinu je landing page zato sto nije implementirana ta stranica */}
                                <Link to="/" id="font">
                                    <span >Buy Tickets</span>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>  
        </div>
      </div>
    </div>
  );
};

export default VideoSection;