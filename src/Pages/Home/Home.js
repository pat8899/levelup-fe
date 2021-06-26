import React from "react";
import "./Home.css";

import Hero from "./HomeComponents/Hero";
import Subsection1 from "./HomeComponents/Subsection1";
import Subsection2 from "./HomeComponents/Subsection2";
import PreviewStudentProjects from "./HomeComponents/PreviewStudentProjects";
import CourseReviews from "./HomeComponents/CourseReviews";

function Home() {
  return (
    <div>
      <Hero />
      <Subsection1 />
      <Subsection2 />
      <PreviewStudentProjects />
      <CourseReviews />
    </div>
  );
}

export default Home;
