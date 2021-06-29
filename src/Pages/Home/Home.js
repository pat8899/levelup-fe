import React from "react";
import "./Home.css";
import Hero from "../../SharedComponents/Hero/Hero";
import Subsection1 from "./HomeComponents/Subsection1";
import Subsection2 from "./HomeComponents/Subsection2";
import PreviewStudentProjects from "./HomeComponents/PreviewStudentProjects";
import CourseReviews from "./HomeComponents/CourseReviews";

function Home() {
  return (
    <div>
      {/* Hero is a shared componenent*/}
      <Hero
        header="Teaching your child future proof skills"
        brief="Lorem ipsum dolor sit amet, consectutue adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Subsection1 />
      <Subsection2 />
      <PreviewStudentProjects />
      <CourseReviews />
    </div>
  );
}

export default Home;
