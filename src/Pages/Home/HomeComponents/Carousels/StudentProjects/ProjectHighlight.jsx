import React from "react";
import "./ProjectHighlight.css";

function ProjectHighlight(props) {
  return (
    <div>
      <div className="ProjectImg"></div>
      <h3 className="StudentName">{props.name}</h3>
      <p className="AgeLevel">
        {props.age} years old, Level {props.level}
      </p>
    </div>
  );
}

export default ProjectHighlight;
