import React from 'react';
import "../../asset/styles/about/abouttop.css";

const AboutTop = () => {
  return (
    <div className="abouttop-container">
      {/* Left Section */}
      <div className="abouttop-left">
        <h1>WE TURN<br />CULTURAL<br />VALUE</h1>
      </div>

      {/* Right Section */}
      <div className="abouttop-right">
        <h1>● INTO<br />COMPANY<br />VALUE</h1>
        <h2>
          BASIC/DEPT® is a global agency that<br/> 
          thrives at the intersection of design, <br/>
          data, and technology. Together, we’re<br/>
           focused on transforming brands and<br/>
            culture — across the world.
        </h2>
      </div>

      {/* Horizontal Line Section */}
      <div className="abouttop-line">
        <span className="line-left">2010-</span>
        <span className="line-center">PRESENT</span>
        <span className="line-dot">●</span>
      </div>
    </div>
  );
}

export default AboutTop;
