import React from "react";
// import { Redirect } from "react-router-dom";
import { Redirect } from "react-router-dom";

// LOGIN & AUTHEN
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./Pages/Login/Auth";

import Navbar from "./SharedComponents/Navbar/Navbar";
import Footer from "./SharedComponents/Footer/Footer";
import Home from "./Pages/Home/Home";
import Course from "./Pages/Course/Course";
import AboutUs from "./Pages/AboutUs/AboutUs";
import StudentProjects from "./Pages/StudentProjects/StudentProjectsPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
// import Login from "./Pages/Login/Login";
// import SignUp from "./Pages/Login/SignUp";

import "./App.css";

function App() {
  return (
    <div className="ResolutionGuide">
      <Navbar />
      <switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/course" component={Course}></Route>
        <Route path="/home" component={Home}></Route>
        <Route exact path="/aboutus" component={AboutUs}></Route>
        <Route
          exact
          path="/student-projects"
          component={StudentProjects}
        ></Route>
        <Route exact path="/contactus" component={ContactUs}></Route>
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/signup" component={SignUp} /> */}
      </switch>
      <Footer />
    </div>
  );
}
export default App;
