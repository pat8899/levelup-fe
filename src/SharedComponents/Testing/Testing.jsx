import React, {useState, useEffect} from "react";
import Axios from "axios"; /*Library allows you to create http requests to send information from the front end to the backend*/
import "./Testing.css";

function Testing() {
  /* vvvv Projects Schema vvvv */
  const [projectList, setProjectList] = useState([]);
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState(0);
  const [studentLevel, setStudentLevel] = useState(0);
  const lastProjectAdded = projectList.length - 1;

  /* Insert */
  const addProject = () => {
    Axios.post("http://localhost:3001/insert-project", {
      studentName: studentName,
      studentAge: studentAge,
      studentLevel: studentLevel,
    });
  };

  /* Read */
  useEffect(() => {
    Axios.get("http://localhost:3001/read-projects").then((response) => {
      setProjectList(response.data);
    });
  }, []);
  /* ^^^^ Projects Schema ^^^^*/

  /* vvvv Reviews Schema vvvv */
  const [reviewList, setReviewList] = useState([]);
  const [reviewHeading, setReviewHeading] = useState("");
  const [reviewBody, setReviewBody] = useState("");
  const [parentName, setParentName] = useState("");
  const [parentIdentifyer, setParentIdentifyer] = useState("");
  const lastReviewAdded = reviewList.length - 1;

  const addReview = () => {
    Axios.post("http://localhost:3001/insert-review", {
      reviewHeading: reviewHeading,
      reviewBody: reviewBody,
      parentName: parentName,
      parentIdentifyer: parentIdentifyer,
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/read-reviews").then((response) => {
      setReviewList(response.data);
      console.log(response.data);
    });
  }, []);
  /* ^^^^ Reviews Schema ^^^^*/

  console.log(reviewList.length);

  return (
    <div className="TestingLayout">
      <h1>Add Project</h1>
      <div>
        <label className="InputBrief">Student Name: </label>
        <input
          type="text"
          className="InputDetails"
          onChange={(event) => {
            setStudentName(event.target.value);
          }}
        />
      </div>
      <div>
        <label className="InputBrief">Student Age: </label>
        <input
          type="number"
          className="InputDetails"
          onChange={(event) => {
            setStudentAge(event.target.value);
          }}
        />
      </div>
      <div>
        <label className="InputBrief">Student Level: </label>
        <input
          type="number"
          className="InputDetails"
          onChange={(event) => {
            setStudentLevel(event.target.value);
          }}
        />
      </div>
      <button className="InputButton" onClick={addProject}>
        Add Project
      </button>

      <br />
      <br />
      <h1>Data from projects</h1>
      {/* Last Project Added*/}
      {projectList.length !== 0 ? (
        <div>
          <h3>Student: {projectList[lastProjectAdded].studentName}</h3>
          <p>Age: {projectList[lastProjectAdded].studentAge}</p>
          <p>Level: {projectList[lastProjectAdded].studentLevel}</p>
        </div>
      ) : null}
      {/* All Projects */}
      {/* {projectList.map((value, key) => {
        return (
          <div key={key}>
            <h3>Student: {value.studentName}</h3>
            <p>Age: {value.studentAge}</p>
            <p>Level: {value.studentLevel}</p>
          </div>
        );
      })} */}
      <br />
      <br />
      <h1>Add Review</h1>
      <div>
        <label className="InputBrief">Review Heading: </label>
        <input
          type="text"
          className="InputDetails"
          onChange={(event) => {
            setReviewHeading(event.target.value);
          }}
        />
      </div>
      <div>
        <label className="InputBrief">Review Body: </label>
        <input
          type="text"
          className="InputDetails"
          onChange={(event) => {
            setReviewBody(event.target.value);
          }}
        />
      </div>
      <div>
        <label className="InputBrief">Parent Name: </label>
        <input
          type="text"
          className="InputDetails"
          onChange={(event) => {
            setParentName(event.target.value);
          }}
        />
      </div>
      <div>
        <label className="InputBrief">Parent Identifyer: </label>
        <input
          type="text"
          className="InputDetails"
          onChange={(event) => {
            setParentIdentifyer(event.target.value);
          }}
        />
      </div>
      <button className="InputButton" onClick={addReview}>
        Add Review
      </button>
      <br />
      <br />
      <h1>Data from reviews</h1>
      {/* Last Review Added */}
      {reviewList.length !== 0 ? (
        <div>
          <h3>Heading: {reviewList[lastReviewAdded].reviewHeading}</h3>
          <p>Body: {reviewList[lastReviewAdded].reviewBody}</p>
          <p>Parent Name: {reviewList[lastReviewAdded].parentName}</p>
          <p>Parent: {reviewList[lastReviewAdded].parentIdentifyer}</p>
        </div>
      ) : null}
      {/* All Reviews */}
      {/* {reviewList.map((value, key) => {
        return (
          <div key={key}>
            <h3>Heading {value.reviewHeading}</h3>
            <p>Body: {value.reviewBody}</p>
            <p>Parent Name: {value.parentName}</p>
            <p>Parent parentIdentifyer: {value.parentIdentifyer}</p>
          </div>
        );
      })} */}
    </div>
  );
}

export default Testing;
