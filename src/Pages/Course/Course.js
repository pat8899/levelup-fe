import React from "react";
import "./Course.css";

import CourseOne from "./CourseComponents/CourseOne";
import CourseTwo from "./CourseComponents/CourseTwo";
import CourseDetails3 from "./CourseComponents/CourseDetails3";
import PrgmPathways4 from "./CourseComponents/PrgmPathways4";
import PrgmDates5 from "./CourseComponents/PrgmDates5";
import Faq6 from "./CourseComponents/Faq6";

function Course() {
  return (
    <div>
      <CourseOne />
      <CourseTwo />
      <CourseDetails3 />
      <PrgmPathways4 />
      <PrgmDates5 /> 
      <Faq6 /> 
       
    </div>
  );
}

export default Course;
