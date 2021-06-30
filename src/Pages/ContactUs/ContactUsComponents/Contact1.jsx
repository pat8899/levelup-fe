import React from "react";
import './Contact1.css';
import PlaceholderImage from "../../../Images/PlaceholderImage.png";

function Contact1() {
  return (
    <div className="Contact1Container">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="AboutHeader">About Us</div>
            <div className="AboutDescription">
              Lorem ipsum dolor sit amet, consectutue dolor sit
            </div>
            <div className="AboutDescription">
              onsectutue Lorem ipsum dolor si dolor sit
            </div>
          </div>
          <div className="col-8">
          <img src={PlaceholderImage} className="Contact1Img" alt="Placeholder"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact1;
