import React from "react";
// import { Redirect } from "react-router-dom";
import {Redirect} from "react-router-dom";

// LOGIN & AUTHEN
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {AuthProvider} from "./Pages/Login/Auth";

import Navbar from "./SharedComponents/Navbar/Navbar";
import Footer from "./SharedComponents/Footer/Footer";
import Home from "./Pages/Home/Home";
import Course from "./Pages/Course/Course";
import AboutUs from "./Pages/AboutUs/AboutUs";
import StudentProjects from "./Pages/StudentProjects/StudentProjectsPage";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Login from "./Pages/Login/Login";
// import SignUp from "./Pages/Login/SignUp";
// import Home2 from "./Pages/Login/Home2";
import Testing from "./SharedComponents/Testing/Testing";

import "./App.css";

function App() {
  return (
    // <AuthProvider>
    //   <Router>
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
        <Route exact path="/login" component={Login} />
        <Route exact path="/testing" component={Testing} />
        {/* <Route exact path="/signup" component={SignUp} /> */}
        {/* <Route exact path="/home2" component={Home2} /> */}
      </switch>
      <Footer />
    </div>
    // </Router>
    // </AuthProvider>
  );
}
export default App;
