// import logo from './logo.svg';
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import "./scss/app.scss";
import { Current , Forecast, Loading} from "./components/index"
import sunny from "./assets/sunny/sunny.png";
import pCloudyWShowers from "./assets/cloudy/day/pCloudyWShowers.png";
import pCloudyWHeavyShowers from "./assets/cloudy/day/pCloudyWHeavyShowers.png";
import cloudy from "./assets/cloudy/cloudy.png";
import cloudyWShowers from "./assets/cloudy/cloudyWShowers.png";
import cloudyWHeavyShowers from "./assets/cloudy/cloudyWHeavyShowers.png";
import cloudyDay from "./assets/cloudy/day/cloudyDay.png";
import cloudyNight from "./assets/cloudy/night/cloudyNight.png";

function App() {

  const [weather, setWeather] = useState({
    current: [],
    forecast: [],
    location: []
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
            setWeather({
                current: response.data.forecast.forecastday,
                forecast: response.data.forecast.forecastday,
                location: response.data.forecast.forecastday,

            });
        }
    })
}, [setWeather]);

  return (
    <div className="app">
      {weather.current.length !== 0 ?
      <div className="weather-container">
        <Current currentDate={moment().format('MMMM Do YYYY, h:mm:ss a')} location={} />
        <Forecast />
      </div>
      : <Loading /> }
    </div>
  );
}

export default App;
