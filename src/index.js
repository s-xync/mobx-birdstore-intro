import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "mobx-react";
import BirdStore from "./stores/BirdStore";

ReactDOM.render(
  <Provider BirdStore={BirdStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
