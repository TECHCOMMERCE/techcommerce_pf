import React from "react";

import styles from "../../../styles/reviews/CardReview.module.css";

const ReviewsCard = ({ stars, description }) => {
  return (
    <div className={styles.MainContainer}>
      <div className="basic__info">
        {/* <p>
          {typeof stars === "object" ? stars.map((e) => e.stars).join(" ") : stars}
        </p> */}
        <img src={stars} alt="stars" />
        <p>{description} buenas</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
