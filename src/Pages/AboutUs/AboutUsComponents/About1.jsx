import React from "react";
import "./About1.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";

function About1() {
  return (
    <div className="About1Container">
      <div className="About1Details">
        <h1 className="About1Header">
          About Us
        </h1>
        <p className="About1Brief">
          Lorem ipsum dolor sit amet, consectutue  <br />
          do eiusmod tempor incididunt ut labore et.
        </p>
     
      </div>

      <img src={PlaceholderImage} className="About1Img" alt="Placeholder"></img>
    </div>
  );
}

export default About1;