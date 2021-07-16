import { Countdown } from './components/Countdown';
import { BackgroundImage } from './components/BackgroudImage';

import './styles/app.scss';

function App() {

  return (
    <>
      <div id="main">
        <BackgroundImage />
        <h1 className="title">Para o ano novo falta:</h1>

        <Countdown />
      </div>
    </>
  );
}

export default App;
