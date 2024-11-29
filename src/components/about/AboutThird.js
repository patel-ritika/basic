import React from 'react';
import "../../asset/styles/about/aboutthird.css";

const AboutThird = () => {
  return (
    <div className="aboutthird-container">
      {/* Left side content */}
      <div className="left-content">
        <h2>AGENCY<br/>SNAPSHOT</h2>
      </div>

      {/* Center content */}
      <div className="center-content">
        <div className="center-item">
          <h3>PEOPLE</h3>
          <h1>120+</h1>
          <h4>We're a world-class team of diverse<br/>
           individuals who are here to do great<br/>
            work as well as be great to work with.</h4>
        </div>

        <div className="center-item">
          <h3>YEARS</h3>
          <h1>10</h1>
          <h4>While we’re proud of our history and<br/>
           our accomplishments, we’re loyal to<br/>
            our future and not our past.</h4>
        </div>

        <div className="center-item">
          <h3>SERVICES</h3>
          <h1>05</h1>
          <h4>Strategy. Brand Experience. Digital<br/>
           Experience. Content. Technology.<br/>
            We’re uniquely built to build brands<br/>
             that matter in culture.</h4>
        </div>
      </div>

      {/* Right side content */}
      <div className="right-content">
        <div className="right-item">
          <h3>GLOBAL REACH</h3>
          <h1>28</h1>
          <h4>As part of Dept, we have 28 offices<br/>
           and 1,500+ people across the world<br/>
            dedicated to delivering the best<br/>
             design, strategy, and technology<br/>
              services to our client partners.</h4>
        </div>

        <div className="right-item">
          <h3>GROWTH</h3>
          <h1>168%</h1>
          <h4>As Adweek’s 18th fastest growing<br/>
           agency, we’ve strengthened our<br/>
            company with new leadership, talent,<br/>
             and clients the past two years. We’re<br/>
              hiring btw.</h4>
        </div>

        <div className="right-item">
          <h3>RANKING</h3>
          <h1>01</h1>
          <h4>Within the mobile and website<br/>
           related categories, no other agency<br/>
            has been recognized by the Webby<br/>
             Awards more than us the past four<br/>
              years. Explore our work.</h4>
        </div>
      </div>
    </div>
  );
}

export default AboutThird;
