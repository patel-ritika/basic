import React from 'react';
import "../../asset/styles/home/homethird.css";
import bd1 from '../../asset/images/bd1.jpg'; 
import bd2 from '../../asset/images/bd2.webp';
import bdImage from '../../asset/images/bd.png';
import mobilevideo from "../../asset/images/mobile.mp4";

const HomeThird = () => {
  return (
    <div className="homethird-container">
      <div className="homethird-top-section">
        <div className="homethird-left">
          <h1>
          BASIC/DEPT® is a global branding <br/>
          and digital design agency building<br/>
           products, services, and eCommerce<br/>
            experiences that turn cultural values<br/>
             into company value.
          </h1>
          <button className="hover-button">SEE THE WORK</button>
        </div>
        <div className="homethird-right">
          <img src={bdImage} alt="Right Section" />
        </div>
      </div>

      <div className="homethird-media-section">
        <div className="media-item-wrapper">
          <img src={bd1} alt="Media 1" className="media-item" />
          <div className="media-text">
            <h3>PATAGONIA</h3>
            <h4>
              AN ECOMMERCE EXPERIENCE<br />
              DRIVEN BY PATAGONIA'S<br />
              BRAND MISSION
            </h4>
          </div>
        </div>

        <div className="media-item-wrapper">
          <img src={bd2} alt="Media 2" className="media-item" />
          <div className="media-text">
            <h3>WILSON</h3>
            <h4>
              A CENTURY-OLD SPORTS<br />
              BRAND FINDING ITS PLACE IN<br />
              CULTURE
            </h4>
          </div>
        </div>

        <div className="media-item-wrapper">
          <video src={mobilevideo} className="media-item" autoPlay muted loop></video>
          <div className="media-text">
            <h3>    GOOGLE STORE</h3>
            <h4>
              AN ECOMMERCE ECPERIENCE<br />
              HELPING GOOGLE BRING ITS<br />
              HARDWARE TO PEOPLE<br/>
              ACROSS THE GLOBE
            </h4>
          </div>
        </div>
      </div>

      <div className="homethird-footer">
        <hr />
        <div className="homethird-footer-info">
          <span>00</span>
          <span>/05</span>
          <span className="dot"></span>
        </div>
      </div>
    </div>
  );
}

export default HomeThird;
