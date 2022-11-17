import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import { Loading } from "./Loading";
import sunny from "../assets/sunny/sunny.png";
import pCloudyWShowers from "../assets/cloudy/day/pCloudyWShowers.png";
import pCloudyWHeavyShowers from "../assets/cloudy/day/pCloudyWHeavyShowers.png";
import cloudy from "../assets/cloudy/cloudy.png";
import cloudyWShowers from "../assets/cloudy/cloudyWShowers.png";
import cloudyWHeavyShowers from "../assets/cloudy/cloudyWHeavyShowers.png";
import cloudyDay from "../assets/cloudy/day/cloudyDay.png";
import cloudyNight from "../assets/cloudy/night/cloudyNight.png";

export const getWeatherIcon = (day, text) => {
    if(day > 0) {
        switch(text) {
            case "Partly cloudy":
                return cloudyDay;
            case "Patchy rain possible":
                return pCloudyWShowers;
            case "Partly cloudy with heavy showers":
                return pCloudyWHeavyShowers;
            case "Cloudy":
                return cloudy;
            case "Cloudy with light showers":
                return cloudyWShowers;
            case "Cloudy with heavy showers":
                return cloudyWHeavyShowers;
            case "Sunny":
                return sunny;
            default:
                return "";

        }
    } else {
        switch(text) {
            case "Partly cloudy":
                return cloudyNight;
            case "Partly cloudy with light showers":
                return sunny;
            default:
                return "";

        }
    }
    
}

export const Current = (props) => {
    const [currentWeather, setCurrentWeather] = useState([]);

    useEffect(() => {
        axios.request("https://weatherapi-com.p.rapidapi.com/current.json", {
            params: {q: 'Enugu'},
            headers: {
              'X-RapidAPI-Key': 'e3baab7e8emshfb5f98ba13f046cp14693djsn63347419cbf2',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }  
        }).then(response => {
            console.log(response.data);
            if(response) {
                setCurrentWeather(currentWeather => {
                    return {...currentWeather, ...response.data}
                });
            }
        })
    }, [setCurrentWeather]);

    return(
        <>
            {currentWeather.length !== 0 ?
            <div className="current">
                <div className="date-location">
                    <span className="location"><span className="location-icon"><i className="fa-solid fa-map-pin"></i></span>{props.location}</span>
                    <span className="date">{props.currentDate}</span>
                </div>
                <div className="conditions">
                    <div className="weather-icon">
                        <img src={props.icon} alt={currentWeather.current.condition.text} />
                    </div>
                    <div className="temperature">
                        <span className="temp-value">{currentWeather.current.temp_c}</span>
                        <span className="temp-unit"><sup>o</sup>C</span>
                    </div>
                    <span className="weather">{currentWeather.current.condition.text}</span>
                </div>
                
            </div>
            : <Loading />
            }
        </>
        
    )
}