import axios from "axios";
import { useEffect, useState } from "react";

import { Loading } from "./Loading";
import sunny from "../assets/sunny.png";
import sunnySm from "../assets/sunny.png";


export const Current = () => {
    const [currentWeather, setCurrentWeather] = useState([]);
    const [weatherIcon, setWeatherIcon] = useState("");

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

    // const weatherTexts = {
    //     patchy: "Patchy rain possible",
    //     pathchyIcon: "//cdn.weatherapi.com/weather/64x64/night/176.png",
    //     partlyCloudy: "Partly cloudy",
    //     partlyCloudyImg: "//cdn.weatherapi.com/weather/64x64/day/116.png"
    // }

    const getWeatherIcon = (text) => {
        switch(text) {
            case "Partly cloudy":
                setWeatherIcon(sunnySm)
            default:
                return "";

        }
    }
    return(
        <>
            {currentWeather.length !== 0 ? 
            <div className="current">
                <div className="date-location">
                    <span className="location"><span className="location-icon"><i className="fa-solid fa-map-pin"></i></span>{currentWeather.location.name}, {currentWeather.location.country}</span>
                    <span className="date">{currentWeather.location.localtime}</span>
                </div>
                <div className="conditions">
                    <div className="weather-icon">
                        <img src={currentWeather.current.condition.icon} alt={"Sunny"} />
                    </div>
                    <div className="temperature">
                        <span className="temp-value">{currentWeather.current.feelslike_c}</span>
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