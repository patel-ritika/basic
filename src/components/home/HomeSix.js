import React from 'react';
import "../../asset/styles/home/homesix.css";
import news1 from "../../asset/images/news1.webp"; // Example image import
import news2 from "../../asset/images/news2.jpg";
import news3 from "../../asset/images/news3.webp";
import news4 from "../../asset/images/news4.jpg";
import news5 from "../../asset/images/news5.png";
import news6 from "../../asset/images/news6.jpg";
import news7 from "../../asset/images/news7.webp";
import news8 from "../../asset/images/news8.webp";
import news9 from "../../asset/images/news9.webp";
import news10 from "../../asset/images/news10.jpg";
import news11 from "../../asset/images/news11.webp";
import news12 from "../../asset/images/news12.jpeg";

const HomeSix = () => {
    const data = [
        {
          image: news1,
          heading: "TOMORROW'S SHOPPER: FIVE WAYS BRANDS CAN REACH GEN ALPHA TODAY",
          press: "PRESS 10.11.24",
        },
        {
          image: news2,
          heading: "GENERATION ALPHA: SAY HELLO TO TOMORROW'S SHOPPER",
          press: "PRESS 7.22.24",
        },
        {
            image: news3,
            heading: "NO LONGER THE AFFORDABLE OPTION, QSRS LOOK TO CONNECT WITH CULTURE",
            press: "PRESS 7.17.24",
          },
          {
            image: news4,
            heading: "THE FUTURE OF FASHION AND AI AT GLOSSY'S ECOMMERCE SUMMIT",
            press: "PRESS 6.13.24",
          },
          {
            image: news5,
            heading: "RETAIL'S NEW PLAYGROUND: WHERE PHYSICAL MEETS DIGITAL",
            press: "PRESS 6.3.24",
          },
          {
            image: news6,
            heading: "GEN ALPHA, THE BETA TEST FOR HOW BRANDS CAN REACH A NEW GENERATION",
            press: "PRESS 5.28.24",
          },
          {
            image: news7,
            heading: "NEW PROJECTS ON THE PODIUM FOR 28TH WEBBY AWARDS",
            press: "PRESS 4.24.24",
          },
          {
            image: news8,
            heading: "WHAT SOFIA COPPOLA CAN TEACH US ABOUT SHIFTING CULTURE",
            press: "PRESS 4.18.24",
          },
          {
            image: news9,
            heading: "THE 28TH ANNUAL WEBBY AWARDS NODS ARE IN",
            press: "PRESS 4.4.24",
          },
          {
            image: news10,
            heading: "ARE SNACKS THE NEW MEALS IN QSR?",
            press: "PRESS 3.20.24",
          },
          {
            image: news11,
            heading: "DAVE LUCAS OF BASIC/DEPT LEADS PANEL DUSCUSSION ON INCLUSIVE DESIGN AT MACH HAUS NYC",
            press: "PRESS 3.11.24",
          },
          {
            image: news12,
            heading: "FROM ORDINARY TO EXTRAORDINARY: BRANGING THE IN-STORE LUXURY EXPERIENCE ONLINE",
            press: "PRESS 3.6.24",
          },
        // Add objects for all 12 images and headings
      ];
  return (
    <div className="homesix">
      {/* Top Heading and Button */}
      <div className="homesix-top">
        <h1>
          FEATURED<br />
          NEWS
        </h1>
        <button className="view-all-button">VIEW ALL</button>
      </div>
      <hr className="top-line" />

      {/* Image and Content Section */}
      {data.map((item, index) => (
        <div key={index} className="content-section">
          <img src={item.image} alt={`Content ${index + 1}`} className="content-image" />
          <div className="content-text">
            <h1>
              {item.heading.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </h1>
            <h5>{item.press}</h5>
          </div>
          <div className="right-icon">&rarr;</div>
          <hr className="content-line" />
        </div>
      ))}
    </div>
  );
}

export default HomeSix;
