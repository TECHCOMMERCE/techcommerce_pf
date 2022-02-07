import Swal from "sweetalert2";

export const swalMessages = (message, title, type) => {
  switch (type) {
    case "success":
      return Swal.fire({
        icon: type,
        title: title || "Very good...",
        text: message,
      });

    case "warning":
      return Swal.fire({
        icon: type,
        title: title || "Warning!",
        text: message,
      });

    default:
      return Swal.fire({
        icon: type,
        title: title || "Oops...",
        text: message,
      });
  }
};
