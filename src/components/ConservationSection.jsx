import React from 'react';
import './ConservationSection.css';
import { Link } from 'react-router-dom';

const ConservationSection = () => {
  return (
    <div className="homepage-text-image" style={{ backgroundColor: '#046383', marginBottom: '30px' }}>
        <div className="left">
            <div className="copy-container">
                <div className="text-block wysiwyg-formatting">
                    <h2 id="conservation">Conservation is At The Heart of Everything We Do at Sebastians Undersea Retreat</h2>
                    <p id="consdesc">When you visit Sebastians Undersea Retreat, you are making a difference to marine conservation. Every dollar you spend supports conservation projects around the world.</p>
                    <p id="consdesc">Our initiatives help protect species ranging from sea turtles and coral reefs in the Pacific to sharks and whales in the Atlantic. The ultimate mission of Sebastian's Undersea Retreat is to save one, save the species.</p>
                        <div className="button-container">
                        {/* Link za support je google zato sto nije implementirana ta stranica */}
                        <Link to="/" className='buttontwo'>
                             <span >Support Marine Life</span>
                        </Link>
                        </div>
                </div>
            </div>
        </div>
        <div className="right-wrapper">
            <div className="right lazy" style={{ backgroundImage: `url('images/otterlycute.jpg')` }}></div>
        </div>
    <div className="clear"></div>
    </div>
  );
};

export default ConservationSection;