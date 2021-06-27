import React from "react";
import "./PreviewStudentProjects.css";
import ProjectsCarousel from "./Carousels/StudentProjects/ProjectsCarousel";
import {CarouselData} from "./Carousels/StudentProjects/CarouselData";

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
      <div>
        <ProjectsCarousel review={CarouselData} />
      </div>
      <div>{/*Might need to remove the Carousel Data part? */}</div>
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
