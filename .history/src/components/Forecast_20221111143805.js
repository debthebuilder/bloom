import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";


export const Forecast = (children) => {
    

    



    
    return(
        <div>
            <div className="title">Forecast</div>
            <div className="forecast">
                {children}
            </div> 
    
        </div>
    )
}