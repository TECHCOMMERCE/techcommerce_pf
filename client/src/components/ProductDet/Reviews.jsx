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
import { Rating } from "@mui/material";

//conponent
 import ReviewsCard from "./reviewComponents/ReviewsCard";
/*import BtnFilterReview from "./reviewComponents/BtnFilterReview"; */

//importing all actions redux
import { getReviewsByProduct } from "../../Store/actions/reviews";
import SubmitReveiw from "./reviewComponents/SubmitReveiw";

const Reviews = ({productid}) => {

  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(getReviewsByProduct(productid));
  }, [dispatch]);

  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div className={st.container}>
      <div className={st.title}>
        <ThemeProvider theme={theme}>
          <Typography variant="h3">Opiniones sobre este producto</Typography>
          {/* <h1>Opiniones sobre el producto </h1> */}
          {/* <Typography variant="h4">Responsive h4</Typography> */}
          {/* <Typography variant="h5">Responsive h5</Typography> */}
        </ThemeProvider>
      </div>
      <div className={st.btns}>
        {/* <BtnFilterReview /> */}
      </div>
      <div className={st.card}>
        {review.rating?<div style={{width: '100%', display: 'flex', flexDirection: 'column',alignItems: 'center'}}><h2>Calificación promedio</h2><Rating name="read-only" value={review.rating} readOnly size="large"/><h3>{review.rating} estrellas</h3><br></br></div>:null}
        {review.userreviews? (
          review?.userreviews.map((e,i) => {
            return <ReviewsCard key={i} name={e.us.name} lastname={e.us.lastname} description={e.description} stars={e.stars} id={e.id} productid={productid} getReviewsByProduct={getReviewsByProduct}/>;
          })
        ) : (
          <div className={st.cardB}>
            <div className={st.titleCard}>
              <ThemeProvider theme={theme}>
                <Typography variant="h5">
                Este producto aún no tiene ninguna reseña
                </Typography>
              </ThemeProvider>
            </div>
            <p className="card-text">
            ¡Oye! Sea el primero en proporcionar una reseña de este producto, usted
              podrá hacerlo después de su compra.
              {/* Se el primero en dejar una review sobre el articulo, podras dejar tu
            review cuando ya lo hayas adquirido. */}
            </p>
          </div>
        )}
      </div>
      {user?.token&&review.orders&&!review.review?<div className={st.submitReview}>
       
        <SubmitReveiw productid={productid} getReviewsByProduct={getReviewsByProduct} />
      </div>:null}
    
    </div>
  );
};

export default Reviews;
