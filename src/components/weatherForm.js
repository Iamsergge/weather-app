import React from 'react';

const WeatherForm = ({ cityName, onInputChange, onSearch }) => {
  return (
    <div className='main'>
      <input type="text" value={cityName} onChange={onInputChange} />
      <button  className='search-box'onClick={onSearch}>Search</button>
    </div>
  );
};

export default WeatherForm;
