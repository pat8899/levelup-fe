import React from "react";
import "./CourseOne.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";

function CourseOne() {
  return (
    <div className="CourseOneContainer">
      <div className="CourseOneDetails">
        <h1 className="CourseOneHeader">
          Our Course
        </h1>
        <p className="CourseOneBrief">
          Lorem ipsum dolor sit amet, consectutue adipiscing elit, sed <br />
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="EnrolNowBtnContainerLarge">
          <a href="/" className="EnrolNowBtnLarge">
            Enrol Now
          </a>
        </div>
      </div>

      <img src={PlaceholderImage} className="CourseOneImg" alt="Placeholder"></img>
    </div>
  );
}

export default CourseOne;