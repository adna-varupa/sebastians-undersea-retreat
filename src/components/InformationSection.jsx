import React from 'react';
import './InformationSection.css';

const InformationSection = () => {
  return (
    <div className="info-container">
      <div id="font" className="table-container">
        <table>
          <caption id="tname"><i className="fas fa-ticket"></i> Tickets</caption>
          <tbody>
            <tr>
              <td className="g">Adult</td>
              <td className="g">$25</td>
            </tr>
            <tr>
              <td>Child(3-11)</td>
              <td>$15</td>
            </tr>
            <tr>
              <td className="g">Senior(62+)</td>
              <td className="g">$20</td>
            </tr>
          </tbody>
        </table>
        {/* Link za kupovinu je google zato sto nije implementirana ta stranica */}
        <a href="https://www.google.co.uk/" className="purchase">Buy Tickets</a>

        <table>
          <caption id="tname"><i className="fas fa-users"></i> Membership</caption>
          <tbody>
            <tr>
              <td className="g">Couple</td>
              <td className="g">$150</td>
            </tr>
            <tr>
              <td>Family</td>
              <td> $250</td>
            </tr>
            <tr>
              <td className="g">Plus</td>
              <td className="g">$350</td>
            </tr>
          </tbody>
        </table>
        {/* Link za kupovinu je google zato sto nije implementirana ta stranica */}
        <a href="https://www.google.co.uk/" className="purchase">Buy Membership</a> 
      </div>
      <div className="information">
        <div className="info-image"></div>
        <div className="list">
          <ul>
            <li>
              <h2>
                <i className="fas fa-clock" aria-hidden="true"></i>
                <span>Today's Hours:</span>                        
              </h2>
              <p>9 am - 6 pm</p>
            </li>
            <li>
              <h2>
                <i className="fas fa-location" aria-hidden="true"></i>
                <span>Address:</span>
              </h2>
              <address className="underline">
                <p>
                  77 Haven Lane<br/>
                  Lansing,<br/>
                  MD<br/>
                  48906<br/>
                </p>
              </address>
            </li>
            <li>
              <h2>
                <i className="fas fa-phone" aria-hidden="true"></i>
                <span>Phone:</span>
              </h2>
              <p>123-456-7891</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
