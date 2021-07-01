import React, {useContext} from "react";
import {Redirect} from "react-router-dom";
import {AuthContext} from "./Auth";
import firebaseConfig from "../../config";
import {Link} from "react-router-dom";

const DashBoard = () => {
  const {currentUser} = useContext(AuthContext);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div classNameName="container mt-5">
        <h1>Welcome</h1>
        <p>This is the dashboard, if you can see this you're logged in.</p>
        <button
          onClick={() => firebaseConfig.auth().signOut()}
          className="btn btn-danger"
        >
          Sign Out
        </button>

        <div className="container">
          <div className="row">
            <div className="col">
              <Link to="/student-projects">
                <h2 className="NavBarOption">Student Project</h2>
              </Link>
            </div>
            <div className="col">Student Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
