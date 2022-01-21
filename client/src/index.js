import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import {firebaseconf} from './config/firebase';
import {FirebaseAppProvider} from 'reactfire';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
   <BrowserRouter>
    <FirebaseAppProvider firebaseConfig={firebaseconf}>
      <App />
    </FirebaseAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);