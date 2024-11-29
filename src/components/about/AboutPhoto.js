import React from 'react';
import "../../asset/styles/about/aboutphoto.css";
import photoImage1 from '../../asset/images/about4.webp'; // Replace with actual image paths
import photoImage2 from '../../asset/images/about2.webp';
import photoImage3 from '../../asset/images/about3.webp';
import photoImage4 from '../../asset/images/about1.jpg';


const AboutPhoto = () => {
  return (
    <div className="aboutphoto-container">
      <div className="aboutphoto-content">
        <h6>
          Easy to understand.<br />
          Impossible to ignore.™<br />
          BASIC/DEPT®, Inc 10 - 24©
        </h6>
      </div>
      <div className="aboutphoto-images">
        <div className="aboutphoto_image-wrapper">
          <img src={photoImage1} alt="Image 1" className="image image-1" />
        </div>
        <div className="aboutphoto_image-wrapper">
          <img src={photoImage2} alt="Image 2" className="image image-2" />
        </div>
        <div className="aboutphoto_image-wrapper">
          <img src={photoImage3} alt="Image 3" className="image image-3" />
        </div>
        <div className="aboutphoto_image-wrapper">
          <img src={photoImage4} alt="Image 4" className="image image-4" />
        </div>
      </div>
    </div>
  );
}

export default AboutPhoto;
