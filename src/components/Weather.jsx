import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import JSONPretty from "react-json-pretty";

class Weather extends Component {
  componentDidMount() {
    this.props.WeatherStore.loadWeatherGenerator("Toronto, ON, Canada");
  }

  render() {
    return (
      <div className="Weather">
        <JSONPretty json={this.props.WeatherStore.weatherData} />
      </div>
    );
  }
}

export default inject("WeatherStore")(observer(Weather));
