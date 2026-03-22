import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import { configureStore } from "@reduxjs/toolkit";
import {store} from "../redux/store.js"
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(



  <React.StrictMode>
    {/* <App/> */}

  <Provider store={store}>

    <BrowserRouter>
      <App />
      <Toaster position=" top-center"/>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>
);