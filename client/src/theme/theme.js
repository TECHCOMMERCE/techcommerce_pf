import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2eb8b0", // verde
    },
    secondary: {
      main: "#D2691E", // chocolate
    },
    success: {
      main: "#3CB371", // mediumseagreen
    },
    warning: {
      main: "#DAA520", // goldendrod
    },
    error: {
      main: "#dc143c", // crimson
    },
    info: {
      main: "#4B0082", // indigo
    },
    pop: {
      main: "#4169E1", // royalblue
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
