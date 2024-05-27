import React from 'react';
import './AnimalEncounter.css';

const AnimalEncounter = () => {
  return (
    <div className="wrapper">
      <div className="animal-encounter">
          <div className="copy-container">
              <h2 id="animal-encounter">It’s Time for Your Animal Encounter</h2>
              <p id="animal-encounter-desc">Visit us at Sebastian's Undersea Retreat to see over 1000 marine creatures, including those found in our Coral Reef exhibit, the Mysterious Deep Sea zone, and the Enchanted Kelp Forest – as well as the original part of the aquarium with all your underwater favorites!</p>
          </div>
          <div className="image-section">
              <div className="item">
                  <img src="images/people6.jpg" alt="Description 1" /> 
              </div>
              <div className="item">
                  <img src="images/people1.jpg" alt="Description 2" />
              </div>
              <div className="item">
                  <img src="images/people9.webp" alt="Description 3" />
              </div>
              <div className="item">
                  <img src="images/people2.webp" alt="Description 4" />
              </div>
              <div className="item">
                  <img src="images/people5.jpg" alt="Description 5" />
              </div>
          </div> 
      </div>
      <div className="price-info-container"></div>
    </div>
  );
};

export default AnimalEncounter;
