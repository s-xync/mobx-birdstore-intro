import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Provider } from "mobx-react";
import BirdStore from "./stores/BirdStore";
import WeatherStore from "./stores/WeatherStore";

const stores = { BirdStore, WeatherStore };

ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);
