import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";
import Wrapper from "./components/Wrapper";

ReactDOM.render(
  <Wrapper>
    <App />
  </Wrapper>,
  document.getElementById("root")
);
