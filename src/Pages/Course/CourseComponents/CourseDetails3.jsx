import React from "react";
import "./CourseDetails3.css";
import Roundsquare from "../../../Images/Roundsquare.png";

function CourseDetails3() {
  return (
    <div className="CourseDetails3Container">
          <div className="CourseDetails3SubContainer"></div>
      <div>
        <h1 className="CourseDetails3Heading">
          Course Details
        </h1>
      </div>

      <div className="CourseDetails3Lists">
        <div>

        </div>
        <div>
        <img
            src={Roundsquare}
            alt="Roundsquare"
            className="Roundsquare"
          ></img>
          <p className="CourseDetails3ListText">$300 per term</p>
        </div>

        <div>
        <img
            src={Roundsquare}
            alt="Roundsquare"
            className="Roundsquare"
          ></img>
          <p className="CourseDetails3ListText">Epsom Girls Grammar</p>
        </div>

        <div>
        <img
            src={Roundsquare}
            alt="Roundsquare"
            className="Roundsquare"
          ></img>
          <p className="CourseDetails3ListText">Saturdays, 10:30 - 11:30am</p>
        </div>

        </div>
      </div>

  );
}

export default CourseDetails3;
