// import logo from './logo.svg';

import "./scss/app.scss";
import { Current , Forecast} from "./components/index"

function App() {
  return (
    <div className="app">
      <div></div>
      <Current />
      <Forecast />
    </div>
  );
}

export default App;
