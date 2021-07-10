import { Countdown } from './components/Countdown';
import { BackgroundImage } from './components/BackgroudImage';

import './styles/app.scss';

function App() {

  return (
    <div id="main">
      <BackgroundImage />
      <Countdown />
    </div>
  );
}

export default App;
