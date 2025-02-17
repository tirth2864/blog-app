import { StrictMode } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
