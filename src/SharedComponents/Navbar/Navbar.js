import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";


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
          <a href="/course" className="link">
            <Link to="/course">
            <h2 className="NavBarOption">Our Course</h2>
            </Link>
          </a>
        </div>
        <div>
          <a href="/student-projects" className="link">
          <Link to="/student-projects">
            <h2 className="NavBarOption StudentProjects">Student Projects</h2>
            </Link>
          </a>
        </div>
        <div>
          <a href="/aboutus" className="link ">
          <Link to="/student-projects">
            <h2 className="NavBarOption">About Us</h2>
            </Link>
          </a>
        </div>
        <div>
          <a href="/" className="link ">
          <Link to="/contact">
            <h2 className="NavBarOption Contact">Contact</h2>
            </Link>
          </a>
        </div>
        {/*Height looks wrong might need to adjust*/}
        <div className="EnrolNowBtnContainer">
          <a href="/" className="link">
          {/* <Link to="/signup"> */}
            <h2 className="EnrolNowBtn">Enrol Now</h2>
            {/* </Link> */}
          </a>
        </div>
        <div className="StudentPortalBtnContainer">
        
          <a href="/" className="link">
          {/* <Link to="/login"> */}
            <h2 className="StudentPortalBtn">Student Portal</h2>
            {/* </Link> */}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
