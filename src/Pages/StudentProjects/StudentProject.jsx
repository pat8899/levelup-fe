import React from "react";
import "./StudentProject.css";
import PlayButton from "../../Images/PlayButton.png";

function StudentProject(props) {
  return (
    <div>
      {/*Add onClick prop */}
      <img
        src={PlayButton}
        alt="Play Button"
        className="PlayButton"
        onClick={props.onClickFunc}
      />

      <div className="ProjectFooter">
        <div>
          <h3 className="StudentDetails SDName">{props.studentName}</h3>
          <p className="StudentDetails">
            {props.age} years old, Level {props.level}
          </p>
        </div>

        <div>
          <h3 className="PlayGameBtn" onClick={props.onClickFunc}>
            Play Game
          </h3>
        </div>
      </div>
    </div>
  );
}

export default StudentProject;
