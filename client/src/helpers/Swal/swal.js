import Swal from "sweetalert2";

export const swalMessages = (message, title, type) => {
  switch (type) {
    case "success":
      return Swal.fire({
        icon: type,
        title: title || "¡Muy Bien!",
        text: message,
      });

    case "warning":
      return Swal.fire({
        icon: type,
        title: title || "¡Advertencia!",
        text: message,
      });

    default:
      return Swal.fire({
        icon: type,
        title: title || "¡Error!",
        text: message,
      });
  }
};
