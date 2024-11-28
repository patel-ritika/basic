import React from 'react';
import "../../asset/styles/work/workfour.css";
import wordfourcenterImage from "../../asset/images/work5.webp"; // Import center image
import wordfourrightImage from "../../asset/images/work6.png";

const WorkFour = () => {
  return (
    <div className="workfour-container">
    {/* Left Section */}
    <div className="workfour-left">
      <h1>
        BRANDING +<br />ADVERTISING
      </h1>
      <p>
        We create identities, platforms, and<br />
        activations that differentiate brands and<br />
        position them to matter in culture.
      </p>
      <button className="workfour-learn-more-btn">LEARN MORE</button>
    </div>

    {/* Center Section */}
    <div className="workfour-center">
      <img
        src={wordfourcenterImage}
        alt="Center Content"
        className="workfour-image"
      />
      <h4>THE PRISONER</h4>
      <p>
        CREATING A WORLD FIT FOR A<br />
        UNIQUELY UNUSUAL BLEND.
      </p>
    </div>

    {/* Right Section */}
    <div className="workfour-right">
      <img
        src={wordfourrightImage}
        alt="Right Content"
        className="workfour-image"
      />
      <h4>KFC MOTHER'S DAY</h4>
      <p>
        KENTUCKY FRIED BUCKQUET<br />
        - A DIY ARRANGEMENT THAT<br />
        COMBINES THE TWO THINGS<br />
        MOM REALLY WANTS,<br />
        FLOWERS AND FRIED<br />
        CHICKEN.
      </p>
    </div>
  </div>
  );
}

export default WorkFour;
