import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Contador from "./components/Contador";
import DibujosComplejos from "./components/DibujosComplejos";
import DibujosComplejosRender from "./components/DibujosComplejosRender";
import PadreDeportes from "./components/PadreDeportes";
import PadreNumero from "./components/PadreNumero";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Contador numero="4" />
    <Contador numero="1" />
    <DibujosComplejos />
    <DibujosComplejosRender /> */}
    {/* <PadreDeportes /> */}
    <PadreNumero />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
