import { putProduct } from "../../Store/actions/product";

export const handleSubmit = async (e, input, dispatch) => {
  e.preventDefault();
  if (input.brand.length && input.categories.length && !!input.image) {
    dispatch(putProduct(input));
    alert("Product edited succesfully");
    window.location.href = `/adminpanel/products/edit/${input.productid}`;
  } else {
    alert("Please complete all the required fields");
  }
};
