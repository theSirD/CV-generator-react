import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Generator from "./generator/Generator.jsx";
import ResultCV from "./resultCV/ResultCV";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Generator />
    <ResultCV />
  </React.StrictMode>
);
