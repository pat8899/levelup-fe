import React from "react";
import "./Hero.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";

function Hero() {
  return (
    <div className="HeroContainer">
      <div className="HeroDetails">
        <h1 className="HeroHeader">
          Teaching your child
          <br />
          future proof skills
        </h1>
        <p className="HeroBrief">
          Lorem ipsum dolor sit amet, consectutue adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="EnrolNowBtnContainerLrg">
          <a href="/" className="link">
            <h2 className="EnrolNowBtnLrg">Enrol Now</h2>
          </a>
        </div>
      </div>

      <img src={PlaceholderImage} className="HeroImg" alt="Placeholder"></img>
    </div>
  );
}

export default Hero;
