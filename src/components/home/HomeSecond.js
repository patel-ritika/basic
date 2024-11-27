import React from 'react';
import "../../asset/styles/home/homesecond.css";
import image1 from '../../asset/images/ad1.png'; 
import image2 from '../../asset/images/ad2.webp'; 
import image3 from '../../asset/images/ad3.jpg';

const HomeSecond = () => {
  return (
    <div>
    <div className="homesecond-container">
      {/* Left Image and Heading */}
      <div className="homesecond-item">
        <img src={image1} alt="Left" className="homesecond-image" />
        <h5 className="homesecond-heading">DESIGN AND BRANDING<br />AGENCY OF TH YEAR</h5>
      </div>

      {/* Center Image and Heading */}
      <div className="homesecond-item">
        <img src={image2} alt="Center" className="homesecond-image" />
        <h5 className="homesecond-heading">AGENCY OF THE YEAR</h5>
      </div>

      {/* Right Image and Heading */}
      <div className="homesecond-item">
        <img src={image3} alt="Right" className="homesecond-image" />
        <h5 className="homesecond-heading">DIGITAL INNOVATION AGENCY <br />OF THE YEAR FINALIST</h5>      
      </div>
    </div>
    <hr className="homesecond-hr" />
    </div>
  );
}

export default HomeSecond;
