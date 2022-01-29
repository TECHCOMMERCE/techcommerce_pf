import { postProduct } from "../../Store/actions/product";

export const handleSubmit = async (e, input, dispatch) => {
  if (input.brand.length || input.categories.length) {
    e.preventDefault();
    // document.getElementById("submit").disabled = true;
    dispatch(postProduct(input));
    alert("Product created succesfully");
    window.location.href = "/adminpanel/products/create";
  } else {
    e.preventDefault();
    alert("Please complete all the required fields");
  }
};
