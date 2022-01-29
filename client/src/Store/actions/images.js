import { POST_CLOUDINARY_IMAGE } from "../constanst/actionsTypes";
import axios from "axios";

export const postCloudinaryImage = (formData, setter) => {
  try {
    return async (dispatch) => {
      await axios
        .post(process.env.REACT_APP_CLOUDINARY_API, formData)
        .then(async(response) => {
          await setter(response.data.url);
          return dispatch({ type: POST_CLOUDINARY_IMAGE });
        });
    };
  } catch (error) {
    console.log(error);
  }
};
