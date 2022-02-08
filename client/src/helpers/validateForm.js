import { swalMessages } from "./Swal/swal";

// objeto con las expresiones regulares a ser evaluadas
const regex = {
  price: /^\d{1,9999999999}$/,
};

export const formValidator = (e) => {
  try {
        if (
          !regex.price.test(e.target.value.trim()) &&
          e.target.value.trim() < 0
        ) {
          e.target.value = e.target.value.replace("-", "");
          swalMessages(
            "No puede ingresar un precio negativo",
            "Precio",
            "error"
          );

          return false;
        }

        if (e.target.value.length > 10){
          e.target.value = e.target.value.slice(0, 10);
          swalMessages(
            "Por favor no exceder de 10 digitos",
            "Precio",
            "error"
          );

          return false;
        }

        return true;
  } catch (error) {
    console.log(error);
  }
};
