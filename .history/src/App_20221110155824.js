// import logo from './logo.svg';

import "./scss/app.scss";
import { Current ,Forecast Splash} from "./components/index"

function App() {
  return (
    <div>
      <Splash />
      <Conditions />
    </div>
  );
}

export default App;
