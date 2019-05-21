import {
  observable,
  decorate,
  action,
  runInAction,
  flow,
  configure
} from "mobx";

configure({ enforceActions: "observed" });

class WeatherStore {
  weatherData = {};

  loadWeather = city => {
    fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`
    )
      .then(response => response.json())
      .then(data => {
        this.weatherUpdate(data);
      });
  };

  weatherUpdate = data => {
    this.weatherData = data;
  };

  loadWeather = city => {
    fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`
    )
      .then(response => response.json())
      .then(data => {
        this.weatherUpdate(data);
      });
  };

  loadWeatherInline = city => {
    fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`
    )
      .then(response => response.json())
      .then(data => {
        runInAction(() => {
          this.weatherData = data;
        });
      });
  };

  loadWeatherAsync = async city => {
    const response = await fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`
    );
    const data = await response.json();

    runInAction(() => {
      this.weatherData = data;
    });
  };

  loadWeatherGenerator = flow(function*(city) {
    const response = yield fetch(
      `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`
    );
    const data = yield response.json();

    this.weatherData = data;
  });
}

decorate(WeatherStore, {
  weatherData: observable,
  weatherUpdate: action
});

export default new WeatherStore();
