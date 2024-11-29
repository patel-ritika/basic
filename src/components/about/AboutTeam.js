import React from 'react';
import "../../asset/styles/about/aboutteam.css";
import img1 from '../../asset/images/team1.webp';
import img2 from '../../asset/images/team2.webp';
import img3 from '../../asset/images/team3.png';
import img4 from '../../asset/images/team4.png';
import img5 from '../../asset/images/team5.webp';
import img6 from '../../asset/images/team6.png';
import img7 from '../../asset/images/team7.jpg';
import img8 from '../../asset/images/team8.jpg';
import img9 from '../../asset/images/team9.png';
import img10 from '../../asset/images/team10.png';

const AboutTeam = () => {
  return (
    <div className="about-team-container">
    <div className="about-team-header">
        <h1>TEAM &<br/> LEADERSHIP</h1>
        <h2>
        We’re 120+ individuals from<br/>
         across the world driven by bold <br/>
         ideas and diverse perspectives.<br/>
          Craft, service, and efficiency<br/>
           drive us forward and we see our<br/>
            agency as a place for our shared <br/>
            values to collide.
        </h2>
    </div>

    {/* First Row of Images */}
    <div className="image-row">
        <div className="image-box">
            <img src={img1} alt="Team Member 1" />
            <h3>LAURA TRON<br/>SVP, CLIENTS</h3>
        </div>
        <div className="image-box">
            <img src={img2} alt="Team Member 2" />
        </div>
        <div className="image-box">
            <img src={img3} alt="Team Member 3" />
            <h3>ANDREW YANOSCIK<br/>VP, CREATIVE</h3>
        </div>
        <div className="image-box">
            <img src={img4} alt="Team Member 4" />
        </div>
    </div>

    {/* Second Row of Images */}
    <div className="image-row">
        <div className="image-box">
            <img src={img5} alt="Team Member 5" />
            <h3>RYAN PARKHURST<br/>VP, STRATEGY</h3>
        </div>
        <div className="image-box">
            <img src={img6} alt="Team Member 6" />
        </div>
        <div className="image-box">
            <img src={img7} alt="Team Member 7" />
            <h3>KC HAIKER<br/>VP, GROWTH</h3>
        </div>
        <div className="image-box">
            <img src={img8} alt="Team Member 8" />
        </div>
    </div>

    {/* Third Row of Images */}
    <div className="image-row">
        <div className="image-box">
            <img src={img9} alt="Team Member 9" />
            <h3>MATT FAULK<br/>FOUNDER & PARTNER</h3>
        </div>
        <div className="image-box">
            <img src={img10} alt="Team Member 10" />
        </div>
    </div>
</div>
  );
}

export default AboutTeam;
