import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";
import { getWeatherIcon } from "./Current";

import { ForecastItem } from "./ForecastItem";

export const Forecast = () => {
    const [forecast, setForecast] = useState({
        day: [],
    });

    const getWeatherIcon = (day, text) => {
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
    
    useEffect(() => {
        axios.request("https://weatherapi-com.p.rapidapi.com/forecast.json", {
            params: {q: 'Enugu', days: 14},
            headers: {
              'X-RapidAPI-Key': 'e3baab7e8emshfb5f98ba13f046cp14693djsn63347419cbf2',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }  
        }).then(response => {
            console.log(response.data);
            if(response) {
                // setForecast(forecast => {
                //     return {...forecast, ...response.data}
                // });
                setForecast({
                    day: response.data.forecast.forecastday
                });
            }
        })
    }, [setForecast]);

    
    return(
        <div>
            <div className="title">Forecast</div>
            {forecast.length !== 0 ? 
            <div className="forecast">
                {forecast.day.map((fc) => {
                    return <ForecastItem key={fc.date} value={fc.day.avgtemp_c} icon={getWeatherIcon("1",fc.day.condition.icon)} text={fc.day.condition.text} />
                })}
                
            </div> 
            : ""}
        </div>
    )
}