import { postProduct } from "../../Store/actions/product";
import {swalMessages} from "../Swal/swal";

export const handleSubmit = async (e, input, dispatch) => {
  e.preventDefault();
  if (input.brand.length && input.categories.length && !!input.image) {
    dispatch(postProduct(input));
      swalMessages("Product created", "Created", "success");
      window.location.href = "/dashboard/products/create";
    } else {
    swalMessages("Please complete all the required fields", null, "error");
  }
};
