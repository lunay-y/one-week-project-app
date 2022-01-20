import React from "react";
import ReactDOM from "react-dom";

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css";
import App from "../src/pages/app/App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "../src/auth/auth.context";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <ContextProvider>
            <App />
         </ContextProvider>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
