import React from 'react';
import "../../asset/styles/home/hometop.css";

const HomeTop = () => {
  return (
    <div className="home-top-container">
    <video className="home-top-video" autoPlay loop muted playsInline>
      <source src={require("../../asset/images/video.mp4")} type="video/mp4" />
      
    </video>
  </div>
  );
}

export default HomeTop;
