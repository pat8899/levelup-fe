import React from "react";
import "./Course.css";

import CourseOne from "./CourseComponents/CourseOne";
import CourseTwo from "./CourseComponents/CourseTwo";
import CourseDetails3 from "./CourseComponents/CourseDetails3";
import PrgmPathways4 from "./CourseComponents/PrgmPathways4";

function Course() {
  return (
    <div>
      <CourseOne />
      <CourseTwo />
      <CourseDetails3 />
      <PrgmPathways4 />
       {/* 2 last sections - to be continued */}
      
    </div>
  );
}

export default Course;
