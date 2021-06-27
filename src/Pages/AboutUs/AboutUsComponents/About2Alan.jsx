import React from "react";
import "./About2Alan.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";

function About2Alan() {
  return (
    <div className="About2AlanContainer">
        <div>
      <img src={PlaceholderImage} className="About2AlanImg" alt="Placeholder"></img>
      </div>

      <div className="About2AlanDetails">
        <h1 className="About2AlanHeader">
          Meet Alan and his duather
        </h1>
        <p className="About2AlanBrief">
          Lorem ipsum dolor sit amet, consectutue  tempor incididunt ut labore et. <br />
          Lorem ipsum dolor sit amet, consectutue  tempor incididunt ut labore et. tempor <br />
          Lorem ipsum dolor sit amet, consectutue  tempor incididunt ut labore et. <br />
          Lorem ipsum dolor sit amet, consectutue  tempor inc <br />
          <br />
          Lorem ipsum dolor sit amet, consectutue  tempor incididunt ut labore et. tempor <br />
          Lorem ipsum dolor sit amet, consectutue  tempor incididunt ut labore et. <br />
          do eiusmod tempor incididunt ut labore et.
        </p>
     
      </div>

    </div>
  );
}

export default About2Alan;