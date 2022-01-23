import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {firebaseconf} from './config/firebase';
import {FirebaseAppProvider} from 'reactfire';
import {Provider} from "react-redux";
import store from "./Store/store";

import App from "./App";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <FirebaseAppProvider firebaseConfig={firebaseconf}>
          <App />
        </FirebaseAppProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
