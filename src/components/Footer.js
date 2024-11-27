import React from 'react';
import "../asset/styles/footer.css";
import footerlogo from "../asset/images/logofooter.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Logo and Heading Section */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={footerlogo} alt="Logo" />
        </div>
        <div className="footer-heading">
          <h1>
            We collaborate with ambitious <br />
            brands and people. Let's build. <br />
            biz@basicagency.com
          </h1>
        </div>
      </div>

      {/* Stay In The Know Section */}
      <div className="footer-subscribe">
        <h3 className="footer-stay">STAY IN THE KNOW</h3>
        <div className="footer-input">
          <input type="text" placeholder="Email Address" />
          <span className="input-arrow">&rarr;</span>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="footer-links">
        <div className="footer-list">
          <div className="footer-dot">&#8226;</div>
          <h3>SOCIAL</h3>
          <ul>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>

        <div className="footer-list">
          <div className="footer-dot">&#8226;</div>
          <h3>INITIATIVES</h3>
          <ul>
            <li>Applied</li>
            <li>Brandbeats</li>
            <li>Moves</li>
            <li>B/Good</li>
          </ul>
        </div>
        <div className="footer-list">
          <div className="footer-dot">&#8226;</div>
          <h3>OFFICES</h3>
          <ul>
            <li>San Diego-CA</li>
            <li>New York-NY</li>
            <li>Bay Area-CA</li>
            <li>St. Louis-MO</li>
            <li>Amsterdam-NL</li>
            <li>London-EN</li>
            <li>Berlin-GE</li>
            <li>Argentine-AR</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
