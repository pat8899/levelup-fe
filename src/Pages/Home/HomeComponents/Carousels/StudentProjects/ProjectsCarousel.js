import React, {useState} from "react";
import "./ProjectsCarousel.css";
import {CarouselData} from "./CarouselData";
import ProjectHighlight from "./ProjectHighlight";
import ProjectPreview from "./ProjectPreview";
import NavArrowLeft from "../../../../../Images/NavArrowLeft.png";
import NavArrowRight from "../../../../../Images/NavArrowRight.png";

function ProjectsCarousel() {
  const [Container0, setContainer0] = useState(0);
  const [Container1, setContainer1] = useState(1);
  const [Container2, setContainer2] = useState(2);
  const [Container3, setContainer3] = useState(3);
  const [Container4, setContainer4] = useState(4);
  const [Container5, setContainer5] = useState(5);

  //   const length = review.length;

  const Project = CarouselData.map(function (data) {
    return data;
  });

  let NumberOfProjects = Project.length - 1;

  console.log(NumberOfProjects);

  const left = () => {
    setContainer0(Container0 === NumberOfProjects ? 0 : Container0 + 1);
    setContainer1(Container1 === NumberOfProjects ? 0 : Container1 + 1);
    setContainer2(Container2 === NumberOfProjects ? 0 : Container2 + 1);
    setContainer3(Container3 === NumberOfProjects ? 0 : Container3 + 1);
    setContainer4(Container4 === NumberOfProjects ? 0 : Container4 + 1);
    setContainer5(Container5 === NumberOfProjects ? 0 : Container5 + 1);
  };

  const right = () => {
    setContainer0(Container0 === 0 ? NumberOfProjects : Container0 - 1);
    setContainer1(Container1 === 0 ? NumberOfProjects : Container1 - 1);
    setContainer2(Container2 === 0 ? NumberOfProjects : Container2 - 1);
    setContainer3(Container3 === 0 ? NumberOfProjects : Container3 - 1);
    setContainer4(Container4 === 0 ? NumberOfProjects : Container4 - 1);
    setContainer5(Container5 === 0 ? NumberOfProjects : Container5 - 1);
  };

  /*Left to right - SP = Student Project*/
  const SP1 = Project[Container0];
  const SP2 = Project[Container1];
  const SP3 = Project[Container2];
  const SP4 = Project[Container3];
  const SP5 = Project[Container4];
  const SP6 = Project[Container5];

  return (
    <div className="CarouselRow">
      <img
        src={NavArrowLeft}
        onClick={left}
        alt="Left Arrow"
        className="CarouselArrowLeft"
      />

      <ProjectPreview name={SP1.studentName} age={SP1.age} level={SP1.level} />

      <ProjectHighlight
        name={SP2.studentName}
        age={SP2.age}
        level={SP2.level}
      />

      <ProjectHighlight
        name={SP3.studentName}
        age={SP3.age}
        level={SP3.level}
      />

      <ProjectHighlight
        name={SP4.studentName}
        age={SP4.age}
        level={SP4.level}
      />

      <ProjectHighlight
        name={SP5.studentName}
        age={SP5.age}
        level={SP5.level}
      />

      <ProjectPreview name={SP6.studentName} age={SP6.age} level={SP6.level} />

      <img
        src={NavArrowRight}
        onClick={right}
        alt="Right Arrow"
        className="CarouselArrowRight"
      />
    </div>
  );
}

export default ProjectsCarousel;
