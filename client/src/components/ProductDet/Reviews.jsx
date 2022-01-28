// react
import { useState, useEffect } from "react";
import * as React from "react";
///react redux
import { useDispatch, useSelector } from "react-redux";

import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";

import Typography from "@mui/material/Typography";
//css module
import st from "../../styles/reviews/Reviews.module.css";

//conponent
import ReviewsCard from "./reviewComponents/ReviewsCard";
import BtnFilterReview from "./reviewComponents/BtnFilterReview";

//importing all actions redux
import { getReviewsByProduct } from "../../Store/actions/reviews";
import SubmitReveiw from "./reviewComponents/SubmitReveiw";

const Reviews = ({productId}) => {
  const dispatch = useDispatch();
  const allComments = useSelector((state) => state.review);
  // const review = true;
  // console.log(productId);
  useEffect(() => {
    dispatch(getReviewsByProduct());
  }, [dispatch]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className={st.container}>
      <div className={st.title}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Reviews about this product</Typography>
          {/* <h1>Opiniones sobre el producto </h1> */}
          {/* <Typography variant="h4">Responsive h4</Typography> */}
          {/* <Typography variant="h5">Responsive h5</Typography> */}
        </ThemeProvider>
      </div>
      <div className={st.btns}>
        <BtnFilterReview />
      </div>
      <div className={st.card}>
        {allComments ? (
          allComments?.map((e) => {
            return <ReviewsCard description={e.description} stars={e.stars} />;
          })
        ) : (
          <div className={st.cardB}>
            <div className={st.titleCard}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5">
                  This product does not have any review yet
                </Typography>
              </ThemeProvider>
            </div>
            <p className="card-text">
              Hey! Be the first one to provide a review for this product, you
              will be able to do it after your purshase.
              {/* Se el primero en dejar una review sobre el articulo, podras dejar tu
            review cuando ya lo hayas adquirido. */}
            </p>
          </div>
        )}
      </div>
      <div className={st.submitReview}>
        
        <SubmitReveiw productId={productId} />
      </div>
    </div>
  );
};

export default Reviews;
