import './App.css';
import './template.css';
import { RainbowTemplate, GradientTemplate, BlankTemplate } from './Template';
import { PatternSelect } from './PatternSelect';

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
        <PatternSelect/>

        <p>Click on a square to customize your LED strip!</p>
        
        <h2>Effects (TBD)</h2>
      </header>
    </div>
  );
}

export default App;
