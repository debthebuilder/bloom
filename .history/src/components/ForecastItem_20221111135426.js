export const ForecastItem = (props) => {
    return(
        <div className="forecast-item" key={props.key}>
            <div className="icon">
                <img src={props.icon} alt={props.alt} />
            </div>
            <div className="temp">
                <span className="temp-value">{props.value}</span>
                <span className="">{props.text}</span>
            </div>
        </div>
    )
}