import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import {firebaseconf} from './config/firebase';
import {FirebaseAppProvider} from 'reactfire';
=======
import {Provider} from "react-redux";
import store from "./Store/store";

>>>>>>> development
import App from './App';

import './index.css';

ReactDOM.render(
<<<<<<< HEAD
  <React.StrictMode>
   <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseconf}>
      <App />
    </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
=======
  
  <Provider store={store}>
  <BrowserRouter>
  <App />
  </BrowserRouter>
  </Provider>,
>>>>>>> development
  document.getElementById('root')
);