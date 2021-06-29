import React from "react";
import "./Hero.css";
import PlaceholderImage from "../../Images/PlaceholderImage.png";

function Hero(props) {
  return (
    <div className="HeroContainer">
      <div className="HeroDetails">
        <h1 className="HeroHeader">{props.header}</h1>
        <p className="HeroBrief">{props.brief}</p>
        {/*Remove button or add a show/hide prop*/}
        <div className="EnrolNowBtnContainerLrg" id={props.visibility}>
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
