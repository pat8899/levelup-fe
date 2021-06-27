import React, {useState} from "react";
import "./ReviewCarousel.css";
import {ReviewData} from "./ReviewData";
import NavArrowLeft from "../../../../../Images/NavArrowLeft.png";
import NavArrowRight from "../../../../../Images/NavArrowRight.png";

function ReviewCarousel() {
  const [reviewLeft, setReviewLeft] = useState(0);
  const [reviewCenter, setReviewCenter] = useState(1);
  const [reviewRight, setReviewRight] = useState(2);

  const reviewData = ReviewData.map(function (data) {
    return data;
  });

  /*Const {output} = {data}[state] */
  const leftReview = reviewData[reviewLeft];
  const centerReview = reviewData[reviewCenter];
  const rightReview = reviewData[reviewRight];

  const reviews = reviewData.length - 1;

  /*if state is = to reviews return , else return state + 1 */
  const moveLeft = () => {
    setReviewLeft(reviewLeft === reviews ? 0 : reviewLeft + 1);
    setReviewCenter(reviewCenter === reviews ? 0 : reviewCenter + 1);
    setReviewRight(reviewRight === reviews ? 0 : reviewRight + 1);
  };

  /*if state is = to 0 return value of reviews, else return state - 1 */
  const moveRight = () => {
    setReviewLeft(reviewLeft === 0 ? reviews : reviewLeft - 1);
    setReviewCenter(reviewCenter === 0 ? reviews : reviewCenter - 1);
    setReviewRight(reviewRight === 0 ? reviews : reviewRight - 1);
  };

  console.log(reviewData);
  return (
    <div className="CourseReviews">
      <img
        src={NavArrowLeft}
        onClick={moveLeft}
        alt="Arrow Left"
        className="NavArrowLeft"
      />

      <div className="ReviewOpen">
        <div className="PlaceholderReviewImg"></div>
        <div className="ReviewOpenContainer">
          <h2 className="ReviewHeading">{leftReview.reviewHeading}</h2>
          <p className="ReviewBodyOpen">{leftReview.reviewBody}</p>
          <div className="ReviewContent">
            <div className="PlaceholderParentPhoto"></div>
            <div>
              <h3 className="ParentName">{leftReview.parentName}</h3>
              <p className="ParentIdentifier">{leftReview.parentIdentifyer}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ReviewClosed">
        <h2 className="ReviewHeading">{centerReview.reviewHeading}</h2>
        <p className="ReviewBody">{centerReview.reviewBody}</p>
        <div className="ReviewContentClosed">
          <div className="PlaceholderParentPhoto"></div>
          <div>
            <h3 className="ParentName">{centerReview.parentName}</h3>
            <p className="ParentIdentifier">{centerReview.parentIdentifyer}</p>
          </div>
        </div>
      </div>

      <div className="ReviewClosed">
        <h2 className="ReviewHeading">{rightReview.reviewHeading}</h2>
        <p className="ReviewBody">{rightReview.reviewBody}</p>
        <div className="ReviewContentClosed">
          <div className="PlaceholderParentPhoto"></div>
          <div>
            <h3 className="ParentName">{rightReview.parentName}</h3>
            <p className="ParentIdentifier">{rightReview.parentIdentifyer}</p>
          </div>
        </div>
      </div>

      <img
        src={NavArrowRight}
        onClick={moveRight}
        alt="Arrow Right"
        className="NavArrowRight"
      />
    </div>
  );
}

export default ReviewCarousel;
