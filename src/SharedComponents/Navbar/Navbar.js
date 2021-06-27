import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar_container">
        <div>
          <a href="/" className="link">
            <h2 className="Logo">LOGO</h2>
          </a>
        </div>
        <div>
          <a href="/" className="link">
            <h2 className="NavBarOption">Our Course</h2>
          </a>
        </div>
        <div>
          <a href="/" className="link">
            <h2 className="NavBarOption StudentProjects">Student Projects</h2>
          </a>
        </div>
        <div>
          <a href="/" className="link ">
            <h2 className="NavBarOption">About Us</h2>
          </a>
        </div>
        <div>
          <a href="/" className="link ">
            <h2 className="NavBarOption Contact">Contact</h2>
          </a>
        </div>
        {/*Height looks wrong might need to adjust*/}
        <div className="EnrolNowBtnContainer">
          <a href="/" className="link">
            <h2 className="EnrolNowBtn">Enrol Now</h2>
          </a>
        </div>
        <div className="StudentPortalBtnContainer">
          <a href="/" className="link">
            <h2 className="StudentPortalBtn">Student Portal</h2>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
