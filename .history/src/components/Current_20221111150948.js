export const Current = (props) => {
   return(
    <div className="current">
          <div className="title">Current</div>
        <div className="date-location">
            <span className="location"><span className="location-icon"><i className="fa-solid fa-map-pin"></i></span>{props.location}</span>
            <span className="date">{props.currentDate}</span>
        </div>
        <div className="conditions">
            <div className="weather-icon">
                <img src={props.icon} alt={props.iconText} />
            </div>
            <div className="temperature">
                <span className="temp-value">{props.value}</span>
                <span className="temp-unit"><sup>o</sup>C</span>
            </div>
            <span className="weather-text">{props.text}</span>
        </div>        
    </div>
    )
}