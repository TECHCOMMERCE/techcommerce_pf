import { Rating } from "@mui/material";
import React from "react";

import styles from "../../../styles/reviews/CardReview.module.css";

const ReviewsCard = ({name='Prueba',lastname='Lopez', stars, description, id }) => {
  return (
    <div key={id} className={styles.MainContainer}>
      <div className="basic__info">
        <h4>{`${name} ${lastname}`}</h4>
        <Rating name="read-only" value={stars} readOnly />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReviewsCard;
