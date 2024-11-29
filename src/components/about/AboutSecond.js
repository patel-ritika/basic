import React from 'react';
import "../../asset/styles/about/aboutsecond.css";

const AboutSecond = () => {
  return (
    <div className="aboutsecond-container">
    {/* ऊपर की लाइन */}
    <div className="line-container">
      <hr className="horizontal-line" />
    </div>
    {/* H1 टेक्स्ट */}
    <h1 className="main-text">BASIC/DEPT ®</h1>
    {/* नीचे की लाइन */}
    <div className="line-container">
     
      <hr className="horizontal-line second-line" />
    </div>
  </div>
  );
}

export default AboutSecond;
