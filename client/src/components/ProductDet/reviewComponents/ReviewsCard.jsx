import { Rating } from "@mui/material";
import React from "react";

import styles from "../../../styles/reviews/CardReview.module.css";

const ReviewsCard = ({ stars, description, id }) => {
  return (
    <div key={id} className={styles.MainContainer}>
      <div className="basic__info">
        {/* <p>
          {typeof stars === "object" ? stars.map((e) => e.stars).join(" ") : stars}
        </p> */}
        {/* <img src={stars} alt="stars" /> */}
        <Rating name="read-only" value={stars} readOnly />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
