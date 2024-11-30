import React from 'react';
import "../../asset/styles/contact/contacttop.css";
import contactImage from "../../asset/images/contact.webp";

const ContactTop = () => {
  return (
    <div className="contact-container">
      {/* Left Side */}
      <div className="contact-left">
        <img src={contactImage} alt="Contact" className="contact-image" />
      </div>

      {/* Right Side */}
      <div className="contact-right">
        <h1>B/D®<br/>Contact</h1>
        <h6>
          Easy to understand. <br />
          Impossible to ignore.™ <br />
          BASIC/DEPT®, Inc 10 - 24©
        </h6>
        <div className="contact-info">
          <div className="info-section">
            
            <div>
              <h3>NEW BUSINESS</h3>
              <h5>biz@basicagency.com</h5>
            </div>
          </div>
          <div className="info-section">
            <h3>GENERAL</h3>
            <h5>hi@basicagency.com</h5>
          </div>
          <div className="info-section">
            <h3>PRESS</h3>
            <h5>press@basicagency.com</h5>
          </div>
          <div className="info-section">
            <h3>JOIN US</h3>
            <h5>recruitment@basicagency.com</h5>
          </div>
        </div>
        <button className="contact_apply-button">APPLY NOW</button>
      </div>
    </div>
  );
}

export default ContactTop;
