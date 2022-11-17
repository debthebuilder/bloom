// import logo from './logo.svg';

import "./scss/app.scss";
import { Current , Forecast, Splash} from "./components/index"

function App() {
  return (
    <div>
      <Splash />
      <Current />
      <Forecast />
    </div>
  );
}

export default App;
