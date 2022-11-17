import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import { ForecastItem } from "./ForecastItem";

export const Forecast = () => {
    const [forecast, setForecast] = useState({
        day: [],
    });

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
            <h1>Forecast</h1>
            {forecast.length !== 0 ? 
            <ul>
                {forecast.day.map((fc) => {
                    return <ForecastItem key={fc.date} icon={fc.day.condition.icon} text={fc.day.condition.text} />
                })}
                
            </ul> 
            : ""}
        </div>
    )
}