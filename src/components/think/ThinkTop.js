import React from 'react';
import "../../asset/styles/think/thinktop.css";

const ThinkTop = () => {
  return (
    <div className="think-top-container">
      <div className="think-header">
        <h1>THINKING</h1>
        <div className="think-dot">●</div>
      </div>
      <div className="think-content">
        <div className="think-section">
          <h3>BRANDBEATS®</h3>
          <h4>
          Brandbeats® is our agency podcast garnering over<br/>
           45,000+ listens per episode where we discuss<br/>
            industry happenings for 30 minutes as well as provide<br/>
             ten tracks of curated music. Our conversations are a<br/>
              candid exploration of design topics, branding trends,<br/>
               and experiences we’re noticing in culture.
          </h4>
        </div>
        <div className="think-section">
          <h3>APPLIED®</h3>
          <h4>
          Applied® is our panel series and thought-leadership<br/>
           platform where we share perspectives and tactics<br/>
            related to strategy, design, and technology. The<br/>
             content is raw and driven by honest observations and<br/>
              guided questions that use culture to explain why<br/>
               trends exist and how they impact business and tech.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default ThinkTop;
