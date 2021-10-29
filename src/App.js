import './App.css';
import './template.css';
import { RainbowTemplate, GradientTemplate, BlankTemplate } from './Template';
import { LEDSquare } from './LEDSquare';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Design Your Light Fibers</h1>
        <h2>Choose a Template</h2>
        <div className="template-row">
          <RainbowTemplate/>
          <GradientTemplate/>
        </div>
        <div className="template-row">
          <BlankTemplate/>
        </div>

        <h2>Waistband Pattern</h2>
        <p>Click on a square to customize your LED strip!</p>
        <p>Here is an example square for you to click on :) </p>
        <LEDSquare onChange={() => {}}/>

        <h2>Effects (TBD)</h2>
      </header>
    </div>
  );
}

export default App;
