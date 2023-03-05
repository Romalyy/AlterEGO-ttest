import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from 'store';

import App from './App';
import './index.css';
import './firebase';

import "./18n"; 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<p>...Loading page</p>}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

