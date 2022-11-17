import axios from "axios";

import { useEffect } from "react";


useEffect(() => {
    axios.get("'https://weatherapi-com.p.rapidapi.com/current.json", {
        params: {q: 'Enugu'},
        headers: {
            'X-RapidAPI-Key': 'e3baab7e8emshfb5f98ba13f046cp14693djsn63347419cbf2',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }).
}, [])


