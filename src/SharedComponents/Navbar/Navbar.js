import React from "react";
import "./Navbar.css";
import EnrolNowBtn from "../Buttons/EnrolNowBtn";
import StudentPortalBtn from "../Buttons/StudentPortalBtn";

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
        <EnrolNowBtn />
        <StudentPortalBtn />
      </div>
    </div>
  );
}

export default Navbar;
