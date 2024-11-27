import React from 'react';
import "../../asset/styles/home/homefive.css";
import back from "../../asset/images/back.mp4";

const HomeFive = () => {
  return (
    <div className="homefive-container">
    <div className="homefive-left">
      <h1>
        BASIC/DEPT®<br/>
        HELPS<br/>
        BRANDS ●<br />
        CONNECT W/<br/>
        CULTURE
      </h1>
      <h3>Adweek Agency Spotlight</h3>
      <button className="homefive_about-us-button">ABOUT US</button>
    </div>
    <div className="homefive-right">
      <video src={back} autoPlay loop muted></video>
    </div>
  </div>
  );
}

export default HomeFive;
