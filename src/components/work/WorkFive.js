import React from 'react';
import "../../asset/styles/work/workfive.css";
import wordfivecenterImage from "../../asset/images/work7.png"; // Import center image
import wordfiverightImage from "../../asset/images/work8.jpg";


const WorkFive = () => {
  return (
    <div className="workfive-container">
    {/* Left Section */}
    <div className="workfive-left">
      <h1>
        DIGITAL<br />PRODUCTS +<br/>SERVICES
      </h1>
      <p>
        We identify and create digital products and<br />
        services that create revenue channels and<br />
        help brands thrive in the new economy.
      </p>
      <button className="workfive-learn-more-btn">LEARN MORE</button>
    </div>

    {/* Center Section */}
    <div className="workfive-center">
      <img
        src={wordfivecenterImage}
        alt="Center Content"
        className="workfive-image"
      />
      <h4>KFC</h4>
      <p>
        A TRANSFORMED DIGITAL<br />
        ORDERING PLATFORM,<br/>
        MERGING KFC'S ICONIC<br/>
        BRAND WITH UNPARALLELED<br/>
        CONVENIENCE
      </p>
    </div>

    {/* Right Section */}
    <div className="workfive-right">
      <img
        src={wordfiverightImage}
        alt="Right Content"
        className="workfive-image"
      />
      <h4>THE WEBBY AWARDS</h4>
      <p>
        ESTABLISHING A NEW<br />
        PRODUCT STRATEGY AND<br />
        DESIGN SYSTEM FOR THE<br />
        INTERNET'S HIGHEST HONOR
      </p>
    </div>
  </div>
  );
}

export default WorkFive;
