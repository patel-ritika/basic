import React from 'react';
import "../../asset/styles/careers/careerstop.css";
import image from '../../asset/images/car1.webp';

const CareersTop = () => {
  return (
    <div className="career-container">
    <div className="career_left-side">
      <h1>MAKE<br/> DOPESH*T.<br/>  ●  GET <br/>PAID.</h1>
      <h6>Make great work. <br /> Work with great people.<br/>BASIC/DEPT®, Inc 10 - 24©</h6>
    </div>
    <div className="career_right-side">
      <img src={image} alt="Career" className="career-image" />
      <div className="career_description">
        <h4>As part of Dept, we operate offices<br/>
         across the world. We’re always<br/>
          looking to connect with individuals<br/>
           who want to make the best work of<br/>
            their lives with the world’s greatest<br/>
             brands. If you’re interested in<br/>
              working with us or learning more, <br/>
              drop us a note, portfolio link, or<br/>
               résumé. We’ll take anything you’ve<br/>
                got.</h4>
      </div>
      <button className="apply-btn">APPLY HERE</button>
    </div>
  </div>
  );
}

export default CareersTop;
