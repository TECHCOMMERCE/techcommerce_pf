import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { firebaseconf } from "./config/firebase";
import { FirebaseAppProvider } from "reactfire";
import { Provider } from "react-redux";
import store from "./Store/store";
import App from "./App";
import "./index.css";
// MUI
import theme from "./theme/theme";
import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FirebaseAppProvider firebaseConfig={firebaseconf}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <App />
          </ThemeProvider>
        </FirebaseAppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
