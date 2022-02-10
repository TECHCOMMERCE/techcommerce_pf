import { postProduct } from "../../Store/actions/product";
import {swalMessages} from "../Swal/swal";

export const handleSubmit = async (e, input, dispatch) => {
  e.preventDefault();
  if (input.brand.length && input.categories.length && !!input.image) {
    dispatch(postProduct(input));
      swalMessages("Producto creado exitosamente", "Created", "success");
      window.location.href = "/dashboard/products/create";
    } else {
    swalMessages("Todos los campos son requeridos", null, "error");
  }
};
