export const Forecast = ({children}) => {
    return(
        <div className="forecast-container">
            <div className="title">Forecast</div>
            <div className="forecast">
                {children}
            </div> 
    
        </div>
    )
}