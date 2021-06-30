import React, {useState} from "react";
import "./StudentProjectsPage.css";
import Hero from "../../SharedComponents/Hero/Hero";
import {StudentProjects} from "../../Data/StudentProjects";
import {Modal} from "./Modal.js";
import StudentProject from "./StudentProject";
import NavArrowLeft from "../../Images/NavArrowLeft.png";
import NavArrowRight from "../../Images/NavArrowRight.png";

function StudentProjectsPage() {
  /*Map Array */
  const data = StudentProjects.map(function (data) {
    return data;
  });

  /* Modal - Show/Hide*/
  const [showModal, setShowModal] = useState(false);
  /*Modal data */
  let [modalProject, setModalProject] = useState();

  /*Projects that are displayed on page */
  const [project1, setProject1] = useState(0);
  const [project2, setProject2] = useState(1);
  const [project3, setProject3] = useState(2);
  const [project4, setProject4] = useState(3);
  const [project5, setProject5] = useState(4);
  const [project6, setProject6] = useState(5);

  /* change page */
  const [currentPage, setCurrentPage] = useState(1);

  /* Path to each projects data */
  const p1 = data[project1];
  const p2 = data[project2];
  const p3 = data[project3];
  const p4 = data[project4];
  const p5 = data[project5];
  const p6 = data[project6];

  /* Updates modal with data from projects onClick */
  const modalUpdateProject1 = () => {
    let updateModal = {name: p1.studentName, age: p1.age, level: p1.level};
    setModalProject(updateModal);
    setShowModal((prev) => !prev);
  };

  const modalUpdateProject2 = () => {
    let updateModal = {name: p2.studentName, age: p2.age, level: p2.level};
    setModalProject(updateModal);
    setShowModal((prev) => !prev);
  };

  const modalUpdateProject3 = () => {
    let updateModal = {name: p3.studentName, age: p3.age, level: p3.level};
    setModalProject(updateModal);
    setShowModal((prev) => !prev);
  };

  const modalUpdateProject4 = () => {
    let updateModal = {name: p4.studentName, age: p4.age, level: p4.level};
    setModalProject(updateModal);
    setShowModal((prev) => !prev);
  };

  const modalUpdateProject5 = () => {
    let updateModal = {name: p5.studentName, age: p5.age, level: p5.level};
    setModalProject(updateModal);
    setShowModal((prev) => !prev);
  };

  const modalUpdateProject6 = () => {
    let updateModal = {name: p6.studentName, age: p6.age, level: p6.level};
    setModalProject(updateModal);
    setShowModal((prev) => !prev);
  };

  const scrollHeight = 1200; /*Added to stop page shuffling up and down */

  /* Update projects with next 6 or previous 6 */
  const page1 = () => {
    setCurrentPage(1);
    setProject1(0);
    setProject2(1);
    setProject3(2);
    setProject4(3);
    setProject5(4);
    setProject6(5);
    window.scrollTo(0, scrollHeight);
  };
  const page2 = () => {
    setCurrentPage(2);
    setProject1(6);
    setProject2(7);
    setProject3(8);
    setProject4(9);
    setProject5(10);
    setProject6(11);
    window.scrollTo(0, scrollHeight);
  };
  const page3 = () => {
    setCurrentPage(3);
    setProject1(12);
    setProject2(13);
    setProject3(14);
    setProject4(15);
    setProject5(16);
    setProject6(17);
    window.scrollTo(0, scrollHeight);
  };

  return (
    <div>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        modalProject={modalProject}
        setModalProject={setModalProject}
      />
      <Hero
        header="Student Projects"
        brief="Lorem ipsum dolor sit amet, consectutue adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        visibility="hide"
      />
      {/* <button onClick={toggleModal}>On CLICK</button> */}
      <div className="ProjectsContainer">
        <StudentProject
          studentName={p1.studentName}
          age={p1.age}
          level={p1.level}
          onClickFunc={modalUpdateProject1}
        />
        {p2 !== undefined ? (
          <StudentProject
            studentName={p2.studentName}
            age={p2.age}
            level={p2.level}
            onClickFunc={modalUpdateProject2}
          />
        ) : null}
        {p3 !== undefined ? (
          <StudentProject
            studentName={p3.studentName}
            age={p3.age}
            level={p3.level}
            onClickFunc={modalUpdateProject3}
          />
        ) : null}
        {p4 !== undefined ? (
          <StudentProject
            studentName={p4.studentName}
            age={p4.age}
            level={p4.level}
            onClickFunc={modalUpdateProject4}
          />
        ) : null}
        {p5 !== undefined ? (
          <StudentProject
            studentName={p5.studentName}
            age={p5.age}
            level={p5.level}
            onClickFunc={modalUpdateProject5}
          />
        ) : null}
        {p5 !== undefined ? (
          <StudentProject
            studentName={p6.studentName}
            age={p6.age}
            level={p6.level}
            onClickFunc={modalUpdateProject6}
          />
        ) : null}
      </div>

      <div className="PageNav">
        <img
          src={NavArrowLeft}
          alt="Previous"
          className="NavArrow"
          onClick={function () {
            if (currentPage === 1) {
              return page3();
            } else if (currentPage === 2) {
              return page1();
            } else return page2();
          }}
        />

        <h3 className="NavNumberButtons" onClick={page1}>
          1
        </h3>
        <h3 className="NavNumberButtons" onClick={page2}>
          2
        </h3>
        <h3 className="NavNumberButtons" onClick={page3}>
          3
        </h3>

        <img
          src={NavArrowRight}
          alt="Next"
          className="NavArrow"
          onClick={function () {
            if (currentPage === 1) {
              return page2();
            } else if (currentPage === 2) {
              return page3();
            } else return page1();
          }}
        />
      </div>
    </div>
  );
}

export default StudentProjectsPage;
