import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/Custom.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="b-black">
      <Routes />
    </div>
  </React.StrictMode>
);
