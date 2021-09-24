import React from "react";
import ReactDOM from "react-dom";
import App from "App";
import reportWebVitals from "reportWebVitals";
import 'react-app-polyfill/ie9';
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "store/index";
import "scss/style.scss"; 

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
reportWebVitals();
