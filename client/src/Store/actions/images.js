import { POST_CLOUDINARY_IMAGE } from "../constanst/actionsTypes";
import axios from "axios";

export const postCloudinaryImage = (formData) => {
  try {
    return async (dispatch) => {
      await axios
        .post(process.env.REACT_APP_CLOUDINARY_API, formData)
        .then(async (response) => {
          return dispatch({
            type: POST_CLOUDINARY_IMAGE,
            payload: response.data.url,
          });
        });
    };
  } catch (error) {
    console.log(error);
  }
};
