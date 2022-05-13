import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { WordcloudProvider } from "./context/WordcloudContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <WordcloudProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WordcloudProvider>
);
