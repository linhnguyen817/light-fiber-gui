import { useState, createContext } from "react";
import './App.css';
import './Components/template.css';
import { Template } from './Components/Template';
import { PatternSelect } from './Components/PatternSelect';
import axios from 'axios';
import { rainbowColors, gradientColors, blankColors } from './constants'

async function handleSubmit(ledColors) {
  const res = await axios({
        url: 'http://localhost:5000/update_design',
        method: 'post',
        data: {
          ledColors: ledColors,
        },
    });
  console.log("res: ", res);
};  

export const PatternContext = createContext();
function App() {
  const [pattern, setPattern] = useState(blankColors);

  function updatePattern(newPattern) {
    // repeat each template square by 3
    var template = [];
    newPattern.forEach(color => {
        for (let i = 0; i < 3; i++) 
        template.push(color);
    });
    setPattern(template);
  };
  function updatePatternSquare(color, index) {
    console.log(color, index);
    var newPattern = pattern;
    newPattern[index] = color;
    setPattern(newPattern);
    console.log(pattern);
  };


  return (
    <PatternContext.Provider value={{pattern, updatePattern, updatePatternSquare}}>
        <div className="App">
          <div className="App-header">
            <h1>design your light fibers!</h1>
            <h2>choose a template</h2>
            <div className="template-row">
              <div onClick={() => updatePattern(rainbowColors)} >
                <Template templateName={"rainbow"} />
              </div>
              <div  onClick={() => updatePattern(gradientColors)}>
                <Template templateName={"gradient"}/>
              </div>
            </div>
            <div className="template-row">
              <div onClick={() => updatePattern(blankColors)}>
                <Template templateName={"blank"}/>
              </div>
            </div>

            <h2>waistband pattern</h2>
            <PatternSelect template={pattern}/>
            <p>click on a square to customize your LED strip!</p>
            
            <h2>effects (TBD)</h2>
            <h2>preview (TBD)</h2>
            <button type="submit" onClick={() => handleSubmit(pattern)}>Submit</button>{' '}
          </div>
        </div>
    </PatternContext.Provider>
  );
}

export default App;
