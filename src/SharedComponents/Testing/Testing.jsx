import React, {useState, useEffect} from "react";
import Axios from "axios"; /*Library allows you to create http requests to send information from the front end to the backend*/
import "./Testing.css";

function Testing() {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState(0);
  const [studentLevel, setStudentLevel] = useState(0);

  const [projectList, setProjectList] = useState([]);

  /*Called whenever page is refreshed */
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setProjectList(response.data);
    });
  }, []);

  const addToDB = () => {
    Axios.post("http://localhost:3001/insert", {
      studentName: studentName,
      studentAge: studentAge,
      studentLevel: studentLevel,
    });
  };

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
      <button className="InputButton" onClick={addToDB}>
        Add Project
      </button>
      <h1>Data from table</h1>
      {projectList.map((value, key) => {
        return (
          <div key={key}>
            <h3>Student: {value.studentName}</h3>
            <p>Age: {value.studentAge}</p>
            <p>Level: {value.studentLevel}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Testing;
