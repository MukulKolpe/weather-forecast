import React, { Component } from "react";
import Form from "./components/Form/form.js";
import Weather from "./components/Weather/weather.js";
import Chart from "./components/Chart/chart.js";
import Error from "./components/Error";
import Nav from "./components/Nav/Nav.js";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

class App extends Component {
  state = {
    temperature: undefined,
    country: undefined,
    city: undefined,
    humidity: undefined,
    loading: false,
    description: undefined,
    error: undefined,
    labels: [],
    temp_max: [],
    hum: [],
    wind_speed: [],
    forecast: false,
  };

  getWeather = async (e) => {
    e.preventDefault();

    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=7df7ab233532d23def84f33a98feb94a&units=metric`
    )
      .then(
        this.setState({
          loading: true,
        })
      )
      .then((data) => {
        this.setState({
          loading: false,
        });
        return data.json();
      });

    //const data = await api_call.json();

    if (country && city) {
      if (!data.list) {
        this.setState({
          temperature: undefined,
          country: undefined,
          city: undefined,
          humidity: undefined,
          description: undefined,
          error:
            "Unable to get weather info!... Please check the values entered...",
        });
      } else {
        console.log(data);
        let labels = [];
        let temp_max = [];
        let hum = [];
        let wind_speed = [];
        let dt;
        for (let i = 0; i < data.list.length; i++) {
          dt = data.list[i];
          let date_ = dt.dt_txt.split(" ")[0];

          if (
            !labels.includes(date_) &&
            dt.dt_txt.split(" ")[1] === "12:00:00"
          ) {
            // console.log(dt.dt_txt.split(' ')[1]);
            labels.push(date_);
            temp_max.push(dt.main["temp_max"]);
            hum.push(dt.main["humidity"]);
            wind_speed.push(dt.wind["speed"]);
          }
        }

        if (labels.length !== temp_max.length) {
          labels.shift();
        }
        // console.log(labels);
        // console.log(temp_max);
        // console.log(hum);
        // console.log(wind_speed);

        this.setState({
          temperature: data.list[0].main.temp,
          country: data.city["country"],
          city: data.city["name"],
          humidity: data.list[0].main.humidity,
          description: data.list[0].weather[0].description,
          error: "",
          labels: labels,
          temp_max: temp_max,
          hum: hum,
          wind_speed: wind_speed,
        });

        console.log(data.city.name);
      }
    } else {
      this.setState({
        temperature: undefined,
        country: undefined,
        city: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter some values!",
      });
    }
  };
  getForecast = () => {
    this.setState({
      forecast: true,
    });
  };

  getPresent = () => {
    this.setState({
      forecast: false,
    });
  };

  render() {
    return (
      <div className="wrapper">
        <Nav />
        <div className="col-md-10 pt-1 mx-auto">
          <div className="jumbotron col-lg-10 mx-auto pt-3 ">
            <Form className="form" getWeather={this.getWeather} />
            {this.state.loading ? (
              <div className="container text-center pt-5 pb-5 mt-5 mb-5">
                <div className="spinner-border text-dark" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            ) : this.state.error ? (
              <Error error={this.state.error} />
            ) : this.state.forecast ? (
              <Chart
                labels={this.state.labels}
                temp_max={this.state.temp_max}
                hum={this.state.hum}
                wind_speed={this.state.wind_speed}
                getPresent={this.getPresent}
              />
            ) : (
              <Weather
                temperature={this.state.temperature}
                country={this.state.country}
                city={this.state.city}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
                getForecast={this.getForecast}
              />
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
