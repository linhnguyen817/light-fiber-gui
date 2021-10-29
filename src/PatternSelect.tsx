import {useEffect} from 'react';
import {LEDSquare} from './LEDSquare';
import './ledsquare.css';


export const PatternSelect = (input: { template : [] }) => {
    var template = input.template;
    // console.log(input.template, input.template.length);
    const NUM_LEDS = 30;
    const blankSquares: string[] = [];
    for (var i=0; i<NUM_LEDS; i++) {
        blankSquares.push("#c4c4c4");
    }
    // TODO: update how we want to display the template
    var patternSquares = template.length>0 ? template.concat(template) : blankSquares;
    // console.log(patternSquares);

    useEffect(() => {
        patternSquares = template.length>0 ? template.concat(template) : blankSquares;
    }, [template]);

    return (
    <div className = "patternSelectContainer">
        <div className="arrowLeft" ></div>
        <div className = "patternSelect">
            {patternSquares.map((squareColor, index) => {
                return <LEDSquare key={index} colorString={squareColor} onChange={() => {}}/>
             })}
        </div>
        <div className="arrowRight"></div>
    </div>
    )
}
