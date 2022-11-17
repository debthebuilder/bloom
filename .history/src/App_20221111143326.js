// import logo from './logo.svg';
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import "./scss/app.scss";
import { Current , Forecast, ForecastItem, Loading} from "./components/index";

import sunny from "./assets/sunny/sunny.png";
import pCloudyWShowers from "./assets/cloudy/day/pCloudyWShowers.png";
import pCloudyWHeavyShowers from "./assets/cloudy/day/pCloudyWHeavyShowers.png";
import cloudy from "./assets/cloudy/cloudy.png";
import cloudyWShowers from "./assets/cloudy/cloudyWShowers.png";
import cloudyWHeavyShowers from "./assets/cloudy/cloudyWHeavyShowers.png";
import cloudyDay from "./assets/cloudy/day/cloudyDay.png";
import cloudyNight from "./assets/cloudy/night/cloudyNight.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({
    current: [],
    forecast: [],
    location: []
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
    setLoading(true)
    axios.request("https://weatherapi-com.p.rapidapi.com/forecast.json", {
        params: {q: 'Enugu', days: 14},
        headers: {
          'X-RapidAPI-Key': 'e3baab7e8emshfb5f98ba13f046cp14693djsn63347419cbf2',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }  
    }).then(response => {
        console.log(response.data);
        if(response) {
            setLoading(false);
            setWeather({
                current: response.data.current,
                forecast: response.data.forecast.forecastday,
                location: response.data.location,

            });
        } else {
          setLoading(true);
        }
    })
}, [setWeather]);

  return (
    <div className="app">
      {!loading ?
      <div className="weather-container">
        <Current 
          currentDate={moment().format('MMMM Do YYYY, h:mm:ss a')} 
          location={`${weather.location.name}, ${weather.location.country}`}
          icon={getWeatherIcon(weather.current.is_day, weather.current.condition.text)}
          iconText={weather.current.condition.text}
          value={weather.current.temp_c}
          text={weather.current.condition.text} />
        <Forecast>
          {weather.forecast}
        </Forecast>
      </div>
      : <Loading /> }
    </div>
  );
}

export default App;
