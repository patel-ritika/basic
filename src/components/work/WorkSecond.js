import React from 'react';
import "../../asset/styles/work/worksecond.css";
import centerImage from "../../asset/images/work1.webp";
import rightImage from "../../asset/images/work2.png";

const WorkSecond = () => {
  return (
    <div className="worksecond-container">
      {/* Top Section */}
      <div className="worksecond_top-section">
        <div className="worksecond_top-left">
          <ul className="worksecond_top-list">
            <li>SERVICES</li>
            <li>INDUSTRIES</li>
            <li>ALL WORK</li>
          </ul>
        </div>
        <div className="worksecond_top-right">
          <p>
            The work we create lives at the intersection of<br/>
            clarity and surprise and positions brands in<br/>
            culture through shared values and ideals.
          </p>
        </div>
      </div>
      <hr className="worksecond_horizontal-line" />

      {/* Middle Section */}
      <div className="worksecond_middle-section">
        <div className="worksecond_left-content">
          <h1>
            BRANDED<br />ECOMMERCE
          </h1>
          <p>
            We go beyond best practices and build best-<br/>
            in-class D2D channels that drive commerce,<br/>
            shape culture, and define categories.
          </p>
          <button className="worksecond_learn-more-btn">LEARN MORE</button>
        </div>
        <div className="worksecond_center-content">
          
          <img
            src={centerImage}
            alt="Center Image"
            className="worksecond_image-hover-effect"
          />
          <h4>WHOOP</h4>
          <p>
            WHOOP.COM-BUILDING A,<br/>
            SOPHISTICATED DIGITAL<br/>
            EXPERIENCE FOR A ONE-OF-A-<br/>
            KIND PRODUCT.
          </p>
        </div>
        <div className="worksecond_right-content">
          <img
            src={rightImage}
            alt="Right Image"
            className="worksecond_image-hover-effect"
          />
          <h4>TEMPO</h4>
          <p>
            TEMPO.FIT - TRANSFORMING<br/>
            AN AT-HOME FITNESS<br/>
            BRAND'S DIGITAL HUB
          </p>
        </div>
      </div>
      <hr className="worksecond_horizontal-line" />
    </div>
  );
}

export default WorkSecond;
