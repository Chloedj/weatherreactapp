import React from 'react';

import './App.css';

function App() {
  return (
   <div className="weather-app">
      <header>
        <form className="search-form" id="search-form">
          <input
            type="search"
            placeholder="Enter a city.."
            required
            id="search-form-input"
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="weather-app-data">
          <div>
            <h1 className="weather-app-city" id="city">Northampton</h1>
            <p className="weather-app-details">
              <span id="time">Tuesday 16:30</span>,
              <span id="description">Partly Sunny</span>
              <br />
              Humidity: <strong id="humidity">66</strong>, Wind:
              <strong id="wind-speed">18</strong>
            </p>
          </div>
          <div className="weather-app-temperature-container">
            <div id="icon"></div>
            <div className="weather-app-temperature" id="temperature">8</div>
            <div className="weather-app-unit">°C</div>
          </div>
        </div>
        <div className="weather-forecast" id="forecast"></div>
      </main>
      <footer>
        This project was coded by{" "}
        <a href="https://github.com/Chloedj" target="_blank" rel="noreferrer"
          >Chloe Duggan-Jones</a
        >
        {" "}and is{" "}
        <a
          href="https://github.com/Chloedj/Project-weather-app"
          target="_blank" rel="noreferrer"
        >
          on GitHub</a
        >
        {" "}and{" "}
        <a
          href="https://effortless-empanada-eec07e.netlify.app/"
          target="_blank" rel="noreferrer"
          >hosted on Netlify</a
        >
      </footer>
      </div>
      )
}

export default App;
