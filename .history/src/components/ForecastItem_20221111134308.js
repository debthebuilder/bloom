export const ForecastItem = (props) => {
    return(
        <div className="forecast-item">
            <div className="icon">
                <img src={props.icon} alt="" />
            </div>
            <div className="temp">
                <span></span>
            </div>
        </div>
    )
}