import logo from './logo.svg';
import './App.css';
import WeatherDisplay from './components/weatherDispaly';
import WeatherForm from './components/weatherForm';
import cold from './assets/cold.jpg';
import warm from './assets/warm.jpg';
import React, { useState } from 'react';
import axios from 'axios';
import WeatherService from "./components/weatherService"

const API_KEY = '1f680949a24dde591bc922f57b9202d1';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [cityName, setCityName] = useState('');

  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(API_BASE_URL, {
        params: {
          q: cityName,
          appid: API_KEY,
          units: 'imperial', // Change this to '' for Fahrenheit
        },
      })
      .then((response) => {
        setWeatherData(response.data);
        setError(null);
      })
      .catch((error) => {
        setError('City not found. Please try again.');
        setWeatherData(null);
      });
  };

  return (
    <div className='app'>
      <h1>Weather App</h1>
      <input type="text" value={cityName} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
