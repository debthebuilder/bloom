// import logo from './logo.svg';
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment/moment";

import "./scss/app.scss";
import { Current , Forecast} from "./components/index"

function App() {
  const [weather, setweather] = useState({
    day: [],
});
  return (
    <div className="app">
      <div className="weather-container">
        <Current />
        <Forecast />
      </div>
    </div>
  );
}

export default App;
