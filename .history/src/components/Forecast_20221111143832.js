export const Forecast = ({children}) => {
    return(
        <div>
            <div className="title">Forecast</div>
            <div className="forecast">
                {children}
            </div> 
    
        </div>
    )
}