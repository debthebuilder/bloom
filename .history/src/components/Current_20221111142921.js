import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import { Loading } from "./Loading";



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
                        <span className="temp-value">{props.value}</span>
                        <span className="temp-unit"><sup>o</sup>C</span>
                    </div>
                    <span className="weather">{props.text}</span>
                </div>
                
            </div>
           
        </>
        
    )
}