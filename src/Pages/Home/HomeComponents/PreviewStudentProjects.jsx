import React from "react";
import "./PreviewStudentProjects.css";
import ProjectsCarousel from "./Carousels/StudentProjects/ProjectsCarousel";
import {StudentProjects} from "../../../Data/StudentProjects";

function PreviewStudentProjects() {
  return (
    <div className="PreviewStudentProjects">
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
        <ProjectsCarousel review={StudentProjects} />
      </div>

      <div className="PreviewGamesBtnContainer">
        <a href="/" className="link">
          <h2 className="PreviewGamesBtn">Play the Games Here</h2>
        </a>
      </div>
    </div>
  );
}

export default PreviewStudentProjects;
