import React from 'react';
import "../../asset/styles/work/workthird.css";
import wordthirdcenterImage from "../../asset/images/work3.webp"; // Import center image
import wordthirdrightImage from "../../asset/images/work4.webp";

const WorkThird = () => {
  return (
    <div className="workthird-container">
      {/* Left Section */}
      <div className="workthird-left">
        <h1>
          WEBSITES +<br />PLATFORMS
        </h1>
        <p>
          We conceive and create experiences that<br />
          immerse consumers in the brand through a<br />
          combination of utility and creativity.
        </p>
        <button className="workthird-learn-more-btn">LEARN MORE</button>
      </div>

      {/* Center Section */}
      <div className="workthird-center">
        <img
          src={wordthirdcenterImage}
          alt="Center Content"
          className="workthird-image"
        />
        <h4>OCEAN SPRAY</h4>
        <p>
          OCEANSPRAY.COM -<br />
          CURATING FRESH WAYS TO<br />
          DISCOVER THE BERRY, THE<br />
          BRAND, AND THE PEOPLE<br />
          BEHIND BOTH.
        </p>
      </div>

      {/* Right Section */}
      <div className="workthird-right">
        <img
          src={wordthirdrightImage}
          alt="Right Content"
          className="workthird-image"
        />
        <h4>DOCUSIGN</h4>
        <p>
          BRAND.DOCUSIGN.COM -<br />
          HOW DO YOU GIVE A BEHIND -<br />
          THE-SCENES TOUR OF A<br />
          REBRAND? YOU<br />
          DECONSTRUCT IT IN FRONT<br />
          OF THE WORLD AND BUILD IT<br />
          BACK FOR THEM TO SEE.
        </p>
      </div>
    </div>
  );
}

export default WorkThird;
