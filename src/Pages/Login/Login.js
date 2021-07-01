import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import firebaseConfig from "../../firebase/config.js";
import PlaceholderImage from "../../Images/PlaceholderImage.png";
import "./Login.css";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    try {
      firebaseConfig
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      alert(error);
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="LoginContainer">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="container mt-5">
              <h4 className="LoginSmallHeader">
                Welcome back to levelUp Works
              </h4>
              <h1 className="LoginHeader">Student Portal </h1>
              <h1 className="LoginHeader2">Log In</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    for="exampleInputEmail1"
                    className="form-label"
                  ></label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>

                <div className="mb-3">
                  <label
                    for="exampleInputPassword1"
                    className="form-label"
                  ></label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>

                <div className="mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="dropdownCheck"
                    />
                    <label class="form-check-label" for="dropdownCheck">
                      Remember me
                    </label>
                    <p className="ForgotPw">Forgot Password</p>
                  </div>
                </div>

                <div className="mb-3"></div>
                <button type="submit" className="btn btn-secondary col-12">
                  Login
                </button>

                <a className="dropdown-item" href="#">
                  Create Account
                </a>
              </form>
            </div>
          </div>

          <div className="col">
            <img
              src={PlaceholderImage}
              className="LoginImg"
              alt="PlaceholderImage"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
