import React, {useRef} from "react";
import "./Modal.css";
import NavArrowLeft from "../../Images/NavArrowLeftWhite.png";
import NavArrowRight from "../../Images/NavArrowRightWhite.png";
import PlayButton from "../../Images/PlayButton.png";
import Close from "../../Images/Close.png";

export const Modal = ({showModal, setShowModal}) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <div className="ModalBackground" ref={modalRef} onClick={closeModal}>
          <div className="ModalProject">
            <img src={NavArrowLeft} alt="Left" className="ModalNavArrow" />
            <div>
              <img
                src={PlayButton}
                alt="PlayButton"
                className="PlayButtonModal"
              />
            </div>
            <div className="DescriptionModal">
              <img
                src={Close}
                alt="Close"
                className="CloseButton"
                onClick={() => setShowModal((prev) => !prev)}
              />
              <h2 className="ProjectHeaderModal">How to Play:</h2>
              <p className="ProjectDescriptionModal">
                Lorem ipsum dolor sit amet, consectutue adipiscing elit.
              </p>
              {/*Pass below as props*/}
              <h3 className="StudentNameModal">John Doe</h3>
              <p className="StudentDetailsModal">10 years old</p>
              <p className="StudentDetailsModal">Level 16</p>
            </div>
            <img src={NavArrowRight} alt="Left" className="ModalNavArrow" />
          </div>
        </div>
      ) : null}
    </>
  );
};
