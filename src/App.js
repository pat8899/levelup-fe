import React from "react";

import {Route, Redirect} from "react-router-dom";

import Navbar from "./SharedComponents/Navbar/Navbar";
import Footer from "./SharedComponents/Footer/Footer";
import Home from "./Pages/Home/Home";
import Course from "./Pages/Course/Course";
import AboutUs from "./Pages/AboutUs/AboutUs";

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
      </switch>
      <Footer />
    </div>
  );
}
export default App;
