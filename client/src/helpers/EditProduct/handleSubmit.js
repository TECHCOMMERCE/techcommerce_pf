import { putProduct } from "../../Store/actions/product";
import { swalMessages } from "../Swal/swal";

export const handleSubmit = async (e, input, dispatch) => {
  e.preventDefault();
  if (input.brand.length && input.categories.length && !!input.image) {
    dispatch(putProduct(input));
    swalMessages("Product edited succesfully", "Edited", "success").then(
      () => {
        window.location.href = `/dashboard/products/edit/${input.productid}`;
      }
    );
  } else {
    swalMessages("Please complete all the required fields", null, "error");
  }
};
