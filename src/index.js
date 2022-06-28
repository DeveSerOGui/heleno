import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolios from "./pages/Portfolios";
import Alunos from "./pages/Alunos";
import Contato from "./pages/Contato";
import Sobre from "./pages/Sobre";

//para rodar o pipeline

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={window.location.pathname || ""}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="contato" element={<Contato />} />
        <Route path="Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
//sdadsadasd
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
