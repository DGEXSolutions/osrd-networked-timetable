import React from "react";
import ReactDOM from "react-dom";

import { AppContextProvider } from "./core/context";
import App from "./views/App";
import reportWebVitals from "./reportWebVitals";

import "@sncf/bootstrap-sncf.metier/dist/bootstrap-sncf.min.css";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
