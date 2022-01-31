import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E90FF", // dodgerblue
    },
    secondary: {
      main: "#F8F8FF", // ghostwhite
    },
    success: {
      main: "#3CB371", // mediumseagreen
    },
    warning: {
      main: "#FFD700", // gold
    },
    error: {
      main: "#dc143c", // crimson
    },
    info: {
      main: "#4B0082", // indigo
    }
  },
  typography: {
    primary: {
      main: "#000000", // black
    },
    secondary: {
      main: "#F8F8FF", // ghostwhite
    },
  },
  spacing: 1, // multiplicador de espacios
});

export default theme;
