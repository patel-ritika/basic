import React from 'react';
import "../../asset/styles/about/aboutfour.css";

const AboutFour = () => {
  return (
    <div className="aboutfour-container">
    {/* Top Section */}
    <div className="capabilities-section">
      {/* Left Side */}
      <div className="aboutfour_left-section">
        <h1>CAPABILITIES</h1>
      </div>
      {/* Right Side Lists */}
      <div className="aboutfour_lists-section">
        <div className="aboutfour_list">
          <h2>CX, COMMERCE, &<br/> PRODUCT DESIGN</h2>
          <ul>
            <li>Market Analysis & Business Case<br/> Development</li>
            <li>Customer Research, Segmentation &<br/> Insights</li>
            <li>Journey Mapping & Testing</li>
            <li>Innovation Sprints & Prototyping</li>
            <li>Experience Strategy & Design</li>
            <li>Content Strategy & IA</li>
            <li>Design Systems & Guidelines</li>
            <li>Website & App Design</li>
            <li>UI Design</li>
            <li>Interaction Design</li>
            <li>Full-Stack Development & CMS <br/>Implementation</li>
            <li>Technical Consultation and<br/> Architecture</li>
          </ul>
        </div>
        <div className="aboutfour_list">
          <h2>DIGITAL-FIRST BRANDING</h2>
          <ul>
            <li>Brand Ecosystem & Roadmap</li>
            <li>Business Intelligence</li>
            <li>Brand Positioning & Architecture</li>
            <li>Brand Messaging</li>
            <li>Visual Identity</li>
            <li>Brand Guidelines & Playbooks</li>
            <li>Visual Design</li>
            <li>Graphic Design</li>
            <li>Art Direction</li>
            <li>Asset Production (Video, 3D,<br/> Photography, Motion Design)</li>
            <li>Brand Naming</li>
            <li>Go-To-Market Strategy</li>
            <li>Campaign Development</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Middle Section: Awards */}
    <div className="awards-section">
      <div className="aboutfour_left-section">
        <h1>AWARDS</h1>
      </div>
      <div className="aboutfour_center-section">
        <h3>
        While results are what matter<br/>
         most, we believe awards bring <br/>
         value and recognition to<br/>
          organizations as well as<br/> individuals.
        </h3>
        <button>FULL AWARDS LIST</button>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="aboutfour_bottom-section">
      <h1>
        WEBBY AWARDS<br />
        ADWEEK<br />
        AWWWARDS<br />
        D&AD<br />
        ONE SHOW<br />
        THE FWA<br />
        COMM ARTS
      </h1>
    </div>
  </div>
  );
}

export default AboutFour;
