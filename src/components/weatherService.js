
import React, { useEffect, useState } from 'react'

const API_KEY = '1f680949a24dde591bc922f57b9202d1';
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherService = (cityName) =>{
    const [weather ,setWeather]= useState()
    const apiKey = 'f680949a24dde591bc922f57b9202d1';

    const fetchData = async () => {
        await fetch('http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID='+ apiKey ).then((res) =>{
               if(res.ok){
                 return res.json();
               }else{
                 if(res.status === 404){
                     console.log('error');
                 }
               }
         }).then((data) =>{
             setWeather(data)
         }).catch((error) =>{
             console.log(error);
         })
 
     }

     useEffect(() => {
        fetchData()
    },[])

    const refetch = () => {
        fetchData();
    };

    return{weather,refetch}


   
}

export default WeatherService
