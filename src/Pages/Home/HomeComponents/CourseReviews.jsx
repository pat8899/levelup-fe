import React from "react";
import "./CourseReviews.css";

import ReviewCarousel from "./Carousels/CourseReviews/ReviewCarousel";

function CourseReviews() {
  return (
    <div className="CourseReviewsContainer">
      <h1 className="CourseReviewsHeading">Course Reviews</h1>
      <ReviewCarousel />
    </div>
  );
}

export default CourseReviews;
