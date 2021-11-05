import { useState } from 'react';
import './App.css';
import './template.css';
import { Template } from './Template';
import { PatternSelect } from './PatternSelect';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// TODO: Make constants file
const rainbowColors = ["#FF0000", "#FF8A00", "#FFF500", "#9EE05C", "#1ED700", "#65E5D6", "#2097DB", "#3242D0", "#B240CF", "#D64EA8"];
const gradientColors = ["#BE0505", "#D40000", "#FF0000", "#FF4040", "#FF6D6D", "#FF8B8B", "#FFB0B0", "#FAC9C9", "#FFDDDD", "#FFEBEB"];
const blankColors = ["#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", ]

const handleSubmit = (ledColors) => {
  const data = {
    ledColors: ledColors,
};

  // axios.post('http://localhost:5000/update_design', data)
  //     .then((res) => {
  //         console.log(res.data)
  //     }).catch((error) => {
  //         console.log(error)
  //     });
  axios({
        url: 'http://localhost:5000/update_design',
        method: 'put',
        data: data,
    });
};

function App() {
  const [patternTemplate, setPatternTemplate] = useState([]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>design your light fibers!</h1>
        <h2>choose a template</h2>
        <div className="template-row">
          <div onClick={() => setPatternTemplate(rainbowColors)} >
            <Template templateName={"rainbow"} />
          </div>
          <div  onClick={() => setPatternTemplate(gradientColors)}>
            <Template templateName={"gradient"}/>
          </div>
        </div>
        <div className="template-row">
          <div onClick={() => setPatternTemplate(blankColors)}>
            <Template templateName={"blank"}/>
          </div>
        </div>

        <h2>waistband pattern</h2>
        <PatternSelect template={patternTemplate}/>
        <p>click on a square to customize your LED strip!</p>
        
        <h2>effects (TBD)</h2>
        <h2>preview (TBD)</h2>
        <Button variant="primary" onClick={handleSubmit(gradientColors)}>Submit</Button>{' '}
      </div>
    </div>
  );
}

export default App;
