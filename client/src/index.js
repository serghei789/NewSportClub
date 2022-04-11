import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import "./normalize.scss";
import {store} from "./redux/store/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
