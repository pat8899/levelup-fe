import React, {useState} from "react";
import "./StudentProjectsPage.css";
import Hero from "../../SharedComponents/Hero/Hero";
import {StudentProjects} from "../../Data/StudentProjects";
import {Modal} from "./Modal.js";
import StudentProject from "./StudentProject";

function StudentProjectsPage() {
  /*Map Array */
  const data = StudentProjects.map(function (data) {
    return data;
  });

  console.log(data);

  /* Modal */
  const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => {
  //   setShowModal((prev) => !prev);
  // };

  /*Student Projects Data */
  let [modalProject, setModalProject] = useState();
  const [project1, setProject1] = useState(0);
  const [project2, setProject2] = useState(1);
  const [project3, setProject3] = useState(2);
  const [project4, setProject4] = useState(3);
  const [project5, setProject5] = useState(4);
  const [project6, setProject6] = useState(5);

  /*Create an onClick that will change the state of the modal to that of the onclick */

  /* data path */
  const p1 = data[project1];
  const p2 = data[project2];
  const p3 = data[project3];
  const p4 = data[project4];
  const p5 = data[project5];
  const p6 = data[project6];

  /* Set modal state */
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
        <StudentProject
          studentName={p2.studentName}
          age={p2.age}
          level={p2.level}
          onClickFunc={modalUpdateProject2}
        />
        <StudentProject
          studentName={p3.studentName}
          age={p3.age}
          level={p3.level}
          onClickFunc={modalUpdateProject3}
        />
        <StudentProject
          studentName={p4.studentName}
          age={p4.age}
          level={p4.level}
          onClickFunc={modalUpdateProject4}
        />
        <StudentProject
          studentName={p5.studentName}
          age={p5.age}
          level={p5.level}
          onClickFunc={modalUpdateProject5}
        />
        <StudentProject
          studentName={p6.studentName}
          age={p6.age}
          level={p6.level}
          onClickFunc={modalUpdateProject6}
        />
      </div>
    </div>
  );
}

export default StudentProjectsPage;
