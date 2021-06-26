import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="navbar_container">
        <a href="/" className="Links Logo">
          LOGO
        </a>
        <a href="/" className="Links NavBarOption">
          Our Course
        </a>
        <a href="/" className="Links NavBarOption StudentProjects">
          Student Projects
        </a>
        <a href="/" className="Links NavBarOption">
          About Us
        </a>
        <a href="/" className="Links NavBarOption Contact">
          Contact
        </a>
        {/*Height looks wrong might need to adjust*/}
        <div className="EnrolNowBtnContainer">
          <a href="/" className="EnrolNowBtn">
            Enrol Now
          </a>
        </div>
        <div className="StudentPortalBtnContainer">
          <a href="/" className="StudentPortalBtn">
            Student Portal
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
