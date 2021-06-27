import React from "react";
import "./ProjectPreview.css";

function ProjectPreview(props) {
  return (
    <div>
      <div className="PreviewProjectImg"></div>
      <h3 className="PreviewStudentName">{props.name}</h3>
      <p className="PreviewAgeLevel">
        {props.age} years old, Level {props.level}
      </p>
    </div>
  );
}

export default ProjectPreview;
