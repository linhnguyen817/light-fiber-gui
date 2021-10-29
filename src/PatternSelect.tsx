import {LEDSquare} from './LEDSquare'
import './ledsquare.css';


export const PatternSelect = (input: { template : [] }) => {
    var template = input.template;
    // console.log(input.template, input.template.length);
    const NUM_LEDS = 30;
    const blankSquares = [];
    for (var i=0; i<NUM_LEDS; i++) {
        blankSquares.push("#c4c4c4");
    }
    const patternSquares = template.length>0 ? template.concat(template) : blankSquares;
    console.log(patternSquares);
    return (
    <div className = "patternSelectContainer">
        <div className="arrowLeft" ></div>
        <div className = "patternSelect">
            {patternSquares.map((squareColor, index) => (
                <LEDSquare key={index} colorString={squareColor} onChange={() => {}}/>
            ))}
        </div>
        <div className="arrowRight"></div>
    </div>
    )
}
