import React from "react";
import "./PreviewStudentProjects.css";

function PreviewStudentProjects() {
  return (
    <div className="PreviewStudentProjects">
      {/*Pull from database*/}
      <div>
        <h1 className="PreviewProjectsHeading">View our Student Projects</h1>
        <p className="PreviewProjectsSubheading">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation.
        </p>
      </div>
      <div className="Carousel">
        {/*Add props -> use flex-grid*/}
        <div>
          <div className="PreviewProjectImg"></div>
          <h3 className="PreviewStudentName">[Student Name]</h3>
          <p className="PreviewAgeLevel">[9 years old, Level 8]</p>
        </div>
        <div>
          <div className="PreviewProjectImg"></div>
          <h3 className="PreviewStudentName">[Student Name]</h3>
          <p className="PreviewAgeLevel">[9 years old, Level 8]</p>
        </div>
      </div>
      <div className="PreviewNavCircles">
        <div className="PreviewNavCircleSelected"></div>
        <div className="PreviewNavCircle"></div>
        <div className="PreviewNavCircle"></div>
        <div className="PreviewNavCircle"></div>
        <div className="PreviewNavCircle"></div>
      </div>

      <div className="PreviewGamesBtnContainer">
        <a href="/" className="PreviewGamesBtn">
          Play the Games Here
        </a>
      </div>
      <div className="PreviewBotPadding"></div>
    </div>
  );
}

export default PreviewStudentProjects;
