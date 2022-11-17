export const ForecastItem = (props) => {
    return(
        <div className="" key={props.key}>
            
            <div className="forecast-item">
                <div className="icon">
                    <img src={props.icon} alt={props.alt} />
                </div>
                <div className="temp">
                    <span className="forecast-value">{props.value}<sup>o</sup>c</span>
                    <span className="forecast-text">{props.text}</span>
                </div>
            </div>
            
        </div>
    )
}