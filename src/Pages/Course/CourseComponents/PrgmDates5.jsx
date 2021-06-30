import React from "react";
import "./PrgmDates5.css";

function PrgmDates5() {
  return (
    <div className="PrgmDates5Container">
      <div className="PrgmDates5SubContainer">
        <h2 className="PrgmDates5Header">Programme Date</h2>
        <div className="PrgmDates5Gap"></div>
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="SelectTerm">Term 1</p>
              <div className="col-10">
                <select className="form-select" id="inlineFormSelectPref">
                  <option selected>Dates</option>
                  <option value="1">1 - 28 February 2021</option>
                  <option value="2">1 - 30 March 2021</option>
                  <option value="3">1 - 30 April 2021</option>
                </select>
              </div>
            </div>

            <div className="col">
              <p className="SelectTerm">Term 2</p>
              <div className="col-10">
                <select className="form-select" id="inlineFormSelectPref">
                  <option selected>Dates</option>
                  <option value="1">1 - 30 August 2021</option>
                  <option value="2">1 - 30 September 2021</option>
                  <option value="3">1 - 30 October 2021</option>
                </select>
              </div>
            </div>

            <div className="PrgmDates5Gap"></div>

            <div className="row">
              <div className="col">
                <p className="SelectTerm">Term 3</p>
                <div className="col-10">
                  <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Dates</option>
                    <option value="1">1 - 30 August 2021</option>
                    <option value="2">1 - 30 September 2021</option>
                    <option value="3">1 - 30 October 2021</option>
                  </select>
                </div>
              </div>

              <div className="col">
                <p className="SelectTerm">Term 4</p>
                <div className="col-10">
                  <select className="form-select" id="inlineFormSelectPref">
                    <option selected>Dates</option>
                    <option value="1">1 - 30 August 2021</option>
                    <option value="2">1 - 30 September 2021</option>
                    <option value="3">1 - 30 October 2021</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrgmDates5;
