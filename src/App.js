import { useState, createContext } from "react";
import './App.css';
import './Components/template.css';
import { Template } from './Components/Template';
import { PatternSelect } from './Components/PatternSelect';
import axios from 'axios';
import { apiUrl, rainbowTemplate, gradientTemplate, blankTemplate, blankPattern } from './constants';
import Button from 'react-bootstrap/Button';

async function handleSubmit(ledColors) {
  const res = await axios({
        url: apiUrl,
        method: 'post',
        data: {
          ledColors: ledColors,
        },
    });
  console.log("Pattern update successful: ", res);
};  

export const PatternContext = createContext();

function App() {
  const [pattern, setPattern] = useState(blankPattern);

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
    var newPattern = pattern;
    newPattern[index] = color;
    setPattern(newPattern);
  };

  return (
    <PatternContext.Provider value={{pattern, updatePattern, updatePatternSquare}}>
        <div className="App">
          <div className="App-header">
            <h1>design your light fibers!</h1>
            <div className="section">
              <h2>choose a template</h2>
              <div className="template-row">
                <div onClick={() => updatePattern(rainbowTemplate)} >
                  <Template templateName={"rainbow"} />
                </div>
                <div onClick={() => updatePattern(gradientTemplate)}>
                  <Template templateName={"gradient"}/>
                </div>
              </div>
              <div className="template-row">
                <div onClick={() => updatePattern(blankTemplate)}>
                  <Template templateName={"blank"}/>
                </div>
              </div>
            </div>

            <div className="section">
              <h2>waistband pattern</h2>
              <PatternSelect template={pattern}/>
              <p style={{paddingLeft: "16px"}}>click on a square to customize your LED strip!</p>
            </div>
            
            <div className="section">
              <h2>effects (TBD)</h2>
            </div>
            
            <div className="section">
              <h2>preview (TBD)</h2>
            </div>

            <div className="section">
              <Button variant="primary" type="submit" onClick={() => handleSubmit(pattern)}>submit</Button>{' '}
            </div>
          </div>
        </div>
    </PatternContext.Provider>
  );
}

export default App;
