import React from "react";
import "./GetInTouch2.css";
import PlaceholderImage from "../../../Images/PlaceholderImage.png";

function GetInTouch2() {
  return (
    <div className="GetInTouch2">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img
              src={PlaceholderImage}
              className="GetInTouch2Img"
              alt="Placeholder"
            ></img>
          </div>
        

        <div className="col-6">
          <div className="GetInTouch2SubHeader">Get in Touch</div>

          <div>
            <form className="row g-2">
              <div className="col-md-5">
                <label for="inputEmail4" className="form-label">
                  First Name
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your first name"
                  id="inputEmail4"
                />
              </div>

              <div className="col-md-5">
                <label for="inputPassword4" className="form-label">
                  Last Name
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your last name"
                  id="inputPassword4"
                />
              </div>

              <div className="col-10">
                <label for="inputAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Enter your email address"
                />
              </div>

              <div className="col-10">
                <label for="inputAddress2" className="form-label">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="mb-3 col-10">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter your message here"
                  rows="3"
                ></textarea>
              </div>

              <div className="col-10">
                <button type="submit" className="btn btn-secondary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default GetInTouch2;
