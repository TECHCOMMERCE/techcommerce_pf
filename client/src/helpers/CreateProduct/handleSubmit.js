import { postProduct } from "../../Store/actions/product";

export const handleSubmit = async (e, input, dispatch) => {
  e.preventDefault();
  if (input.brand.length && input.categories.length && !!input.image) {
    dispatch(postProduct(input));
      alert("Product created")
      window.location.href = "/dashboard/products/create";
  } else {
    alert("Please complete all the required fields");
  }
};
