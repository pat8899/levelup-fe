import React from "react";
import "./CourseReviews.css";
import NavArrowLeft from "../../../Images/NavArrowLeft.png";
import NavArrowRight from "../../../Images/NavArrowRight.png";

function CourseReviews() {
  return (
    <div className="CourseReviewsContainer">
      <h1 className="CourseReviewsHeading">Course Reviews</h1>
      <div className="CourseReviews">
        <img src={NavArrowLeft} alt="Arrow Left" className="NavArrowLeft" />

        {/* Replace with props */}

        <div className="ReviewOpen">
          <div className="PlaceholderReviewImg"></div>
          <div className="ReviewOpenContainer">
            <h2 className="ReviewHeading">Best Course!</h2>
            <p className="ReviewBody">
              Lorem ipsum dolor sit amet, <br />
              consectetur adipiscing elit, sed do
              <br />
              eiusmod tempor incididunt ut
              <br />
              labore et dolore magna aliquar.
            </p>
            <div className="ReviewContent">
              <div className="PlaceholderParentPhoto"></div>
              <div>
                <h3 className="ParentName">Jane Doe</h3>
                <p className="ParentIdentifier">Proud Mother</p>
              </div>
            </div>
          </div>
        </div>

        {/* Replace with props */}

        <div className="ReviewClosed">
          <h2 className="ReviewHeading">Loved it</h2>
          <p className="ReviewBody">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor
            <br />
            incididunt ut labore et
            <br />
            dolore magna aliquar.
          </p>
          <div className="ReviewContentClosed">
            <div className="PlaceholderParentPhoto"></div>
            <div>
              <h3 className="ParentName">Jane Doe</h3>
              <p className="ParentIdentifier">Proud Mother</p>
            </div>
          </div>
        </div>

        {/* Replace with props */}

        <div className="ReviewClosed">
          <h2 className="ReviewHeading">Loved it</h2>
          <p className="ReviewBody">
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor
            <br />
            incididunt ut labore et
            <br />
            dolore magna aliquar.
          </p>
          <div className="ReviewContentClosed">
            <div className="PlaceholderParentPhoto"></div>
            <div>
              <h3 className="ParentName">Jane Doe</h3>
              <p className="ParentIdentifier">Proud Mother</p>
            </div>
          </div>
        </div>

        <img src={NavArrowRight} alt="Arrow Right" className="NavArrowRight" />
      </div>
    </div>
  );
}

export default CourseReviews;
