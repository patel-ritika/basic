import React from 'react';
import "../../asset/styles/home/homefour.css";
import scroll1 from '../../asset/images/feature1.webp';
import scroll2 from '../../asset/images/feature2.svg';
import scroll3 from '../../asset/images/feature3.png';

const HomeFour = () => {
   
  return (
    <div className="homefour-container">
    <h1 className="homefour_heading">FEATURED<br />ENGAGEMENTS</h1>
    <div className="homefour_image-section" >
      <div className="homefour_image-box">
        <img src={scroll1} alt="image1" />
        <h4>GOOGLE</h4>
        <p>Our embedded partnership with Google is<br/>
        as deep as it gets. We're the lead creative<br/>
        agency for Google Store and provide<br/>
        strategy, design, and prototyping to other<br/>
        divisions. Learn more about our<br/>
        partnership.</p>
      </div>
      <div className="homefour_image-box">
        <img src={scroll2} alt="image2" />
        <h4>KFC</h4>
        <p>An award-winning global, digital<br/>
        transformation engagement spanning<br/>
        eCommerce, mobile app, and new drive<br/>
        thru experiences. Bringing KFC's brand<br/>
        story to life while making it easier for<br/>
        customers to buy chicken. Learn more<br/>
        about our partnership.</p>
      </div>
      <div className="homefour_image-box">
          <img src={scroll3} alt="image3" />
          <h4>WILSON</h4>
          <p>A reimagining of Wilson's brand visual<br/>
          identity, and brand campaign, to support<br/>
          a new product drop and the launch of the<br/>
          first brick and mortar retail location in the<br/>
          brand's 108-year history. Read our full<br/>
          case study.</p>
        </div>
        
        </div>
      
    </div>
  );
}

export default HomeFour;
