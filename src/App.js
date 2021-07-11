import { Countdown } from './components/Countdown';
import { BackgroundImage } from './components/BackgroudImage';

import './styles/app.scss';

function App() {

  return (
    <div id="main">
      <h1 className="title">Para o ano novo falta:</h1>

      <BackgroundImage />
      <Countdown />
    </div>
  );
}

export default App;
