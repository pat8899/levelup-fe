import React from "react";
import "./Subsection1.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";
import {Link} from "react-router-dom";

function Subsection1() {
  return (
    <div className="Subsection1">
      <img
        src={PlaceholderImage}
        alt="Placeholder"
        className="Subsection1Img"
      />
      <div>
        <h2 className="Subsection1Header">Creative Problem Solving</h2>
        <p className="Subsection1Details">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <br />
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          <br />
          veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet,
          consectetur
          <br />
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
        </p>
        <div className="LearnMoreBtnContainer">
          <Link to="/course" className="link">
            <h2 className="LearnMoreBtn">Learn More</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Subsection1;
