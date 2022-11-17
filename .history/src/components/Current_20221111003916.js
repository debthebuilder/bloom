import axios from "axios";
import { useEffect, useState } from "react";

import sunny from "../assets/sunny.png";

export const Current = () => {
    const {currentWeather, setCurrentWeather} = useState([]);

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: {q: 'Enugu'},
        headers: {
          'X-RapidAPI-Key': 'e3baab7e8emshfb5f98ba13f046cp14693djsn63347419cbf2',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };

    useEffect(() => {
        axios.request("").then(response => {
            console.log(response.data);
            if(response) {
                setCurrentWeather(response.data);
            }
        })
    }, [options, setCurrentWeather]);

    console.log(currentWeather);
    return(
        <div className="current">
            <div className="date-location">
                <span className="location"><span className="location-icon"><i class="fa-solid fa-map-pin"></i></span>Enugu</span>
                <span className="date">Thursday, 11 November 2022</span>
            </div>
            <div className="conditions">
                <div className="weather-icon">
                    <img src={sunny} alt={"Sunny"} />
                </div>
                <div className="temperature">
                    <span className="temp-value">23</span>
                    <span className="temp-unit"><sup>o</sup>C</span>
                </div>
                <span className="weather">sunny</span>
            </div>
            
        </div>
    )
}