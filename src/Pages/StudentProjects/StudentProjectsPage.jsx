import React, {useState} from "react";
import Hero from "../../SharedComponents/Hero/Hero";
import {StudentProjects} from "../../Data/StudentProjects";
import {Modal} from "./Modal.js";

function StudentProjectsPage() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const data = StudentProjects.map(function (data) {
    return data;
  });

  console.log(data);

  /*Create an onClick that will change the state of the modal to that of the onclick */

  return (
    <div>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Hero
        header="Student Projects"
        brief="Lorem ipsum dolor sit amet, consectutue adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        visibility="hide"
      />

      <button onClick={toggleModal}>On CLICK</button>
    </div>
  );
}

export default StudentProjectsPage;
