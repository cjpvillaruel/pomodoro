import './App.css';
import {ReactComponent  as SettingsLogo } from './images/icon-settings.svg'
import ButtonGroup from './components/ButtonGroup';
import Timer from './components/Timer/Timer';
import { useState } from 'react';

function App() {
  const [isSettingsOpen, setSettingsModal] = useState(false) 
  return (
    <div className="App">
      <h1>Pomodoro</h1>
      <ButtonGroup />
      <Timer running={false} />
      <SettingsLogo onClick={() => setSettingsModal(true)} />

    </div>
  );
}

export default App;
