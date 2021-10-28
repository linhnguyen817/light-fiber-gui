import logo from './logo.svg';
import './App.css';
import { Template } from './Template';

import { ColorPicker } from './ColorPicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Design Your Light Fibers</h1>
        <h2>Choose a Template</h2>
        <Template />

        <h2>Waistband Pattern</h2>
        <p>Click on a square to customize your LED strip!</p>

        <ColorPicker/>
        <h2>Effects (TBD)</h2>
      </header>
    </div>
  );
}

export default App;
