import React from 'react';
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm } from 'react-icons/wi';

const WeatherDisplay = ({ data }) => {
  const { name, main, weather, wind } = data;

  const getWeatherIcon = (weatherDescription) => {
    switch (weatherDescription) {
      case 'Clear':
        return <WiDaySunny />;
      case 'Clouds':
        return <WiCloud size={50} />;
      case 'Rain':
        return <WiRain  size={50}/>;
      case 'Snow':
        return <WiSnow size={50}/>;
      case 'Thunderstorm':
        return <WiThunderstorm size={50}/>;
      default:
        return null; // You can handle other weather conditions here or add a default icon.
    }
  };

  return (
    <div className='weather-display'>
      <div className='text'>
        <h2>Weather in {name}</h2>
        <p>
          {getWeatherIcon(weather[0].main)} {weather[0].description}
        </p>
        <p>Temperature: {main.temp} °C</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
