import React from "react";
import "./CourseTwo.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";
import Roundcircle from "../../../Images/Roundcircle.png";
import Roundsquare from "../../../Images/Roundsquare.png";

function CourseTwo() {
  return (
    <div className="CourseTwoContainer">
      <div className="CourseTwoDetails">
        <div>
          <h2 className="CourseTwoHeader">
            Creative Problem
            <br />
            Solving Course
          </h2>
          <p className="CourseTwoBrief">
            Lorem ipsum dolor sit amet consectutue adipiscing
            <br />
            consectutue adipiscing consectutue adipiscingelit, sed <br />
            do eiusmod tempor consectutue adipiscingincididunt ut <br />
            labore et dolore consectutue adipiscingmagna aliqua.
          </p>
        </div>

        <div className="CourseTwoLists">
          <img
            src={Roundcircle}
            alt="Roundcircle"
            className="Roundcircle"
          ></img>
          <p className="CourseTwoListHead">Game Design </p>
          <p className="CourseTwoListText">
          Lorem ipsum dolor sit amet consectutue adipiscing elit<br />
            consectutue adipiscing elit amet consectutue adipiscing
          </p>
        </div>

        <div className="CourseTwoLists">
          <img
            src={Roundcircle}
            alt="Roundcircle"
            className="Roundcircle"
          ></img>
          <p className="CourseTwoListHead">Coding </p>
          <p className="CourseTwoListText2">
          Lorem ipsum dolor sit amet consectutue adipiscing elit<br />
            consectutue adipiscing elit amet consectutue adipiscing
          </p>
        </div>

        <div className="CourseTwoLists">
          <img
            src={Roundcircle}
            alt="Roundcircle"
            className="Roundcircle"
          ></img>
          <p className="CourseTwoListHead">Creativity </p>
          <p className="CourseTwoListText3">
          Lorem ipsum dolor sit amet consectutue adipiscing elit<br />
            consectutue adipiscing elit amet consectutue adipiscing
          </p>
        </div>

      </div>
      <div>
        <img
          src={PlaceholderImage}
          className="CourseTwoImg"
          alt="Placeholder"
        ></img>
      </div>
    </div>
  );
}

export default CourseTwo;
