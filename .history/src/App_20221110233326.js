// import logo from './logo.svg';

import "./scss/app.scss";
import { Current , Forecast} from "./components/index"

function App() {
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
