export const Forecast = ({children}) => {
    return(
        <div className="container">
            <div className="title">Forecast</div>
            <div className="forecast">
                {children}
            </div> 
    
        </div>
    )
}