import sunny from 

export const Current = () => {
    return(
        <div className="current">
            <div className="date-location">
                <span className="location">Enugu</span>
                <span className="date">Thursday, 11 November 2022</span>
            </div>
            <div className="conditions">
                <div className="temperature">
                    <span className="temp-value">23</span>
                    <span className="unit"><sup>o</sup>C</span>
                </div>
                <span className="weather">sunny</span>
            </div>
            
        </div>
    )
}