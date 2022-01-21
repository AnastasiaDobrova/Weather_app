import React from "react";
import "./App.css";
import Search from "./components/search";
import Weather from "./components/weather";

const ApiKey = "19dcb6eb8d5f5caa26733032915b74ae";

class App extends React.Component {
  constructor() {
    super()
      this.state = {
          city: '',
          country: '',
          main: '',
          celsius: '',
          description: '',
          error: false
      }
    }

    getCelsius(temp) {
        let celsius = Math.floor(temp - 273.15);
        return celsius;
    }

  getWeather = async e => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    if (country && city) {
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${ApiKey}`);
        const response = await apiCall.json();
        this.setState({
            city: `${response.name}, ${response.sys.country}`,
            country: response.sys.country,
            celsius: this.getCelsius(response.main.temp),
            main: response.weather[0].main,
            description: response.weather[0].description,
            error: false
        })
    } else {
      this.setState({
        error: true
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Search loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          temp_celsius={this.state.celsius}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;

