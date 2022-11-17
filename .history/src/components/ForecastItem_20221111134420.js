export const ForecastItem = (props) => {
    return(
        <div className="forecast-item">
            <div className="icon">
                <img src={props.icon} alt={props.alt} />
            </div>
            <div className="temp">
                <span>{props.value}</span>
                <span>{props.}</span>
            </div>
        </div>
    )
}