import React from "react";

import {Route, Redirect} from "react-router-dom";

import Navbar from "./SharedComponents/Navbar/Navbar";
import Footer from "./SharedComponents/Footer/Footer";
import Home from "./Pages/Home/Home";
import Course from "./Pages/Course/Course";
import Page2 from "./Pages/Page2/Page2";

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
        <Route exact path="/page2" component={Page2}></Route>
      </switch>
      <Footer />
    </div>
  );
}
export default App;
