import axios from "axios";
import { useEffect } from "react";

import sunny from "../assets/sunny.png";

export const Current = () => {
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