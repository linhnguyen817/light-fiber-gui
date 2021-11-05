import {useEffect} from 'react';
import {LEDSquare} from './LEDSquare';
import './ledsquare.css';


export const PatternSelect = (input: { template : [] }) => {
    var temp = input.template;
    // repeat each template square by 3
    var template: string[] = [];
    temp.forEach(color => {
        for (let i = 0; i < 3; i++) 
        template.push(color);
    })

    const NUM_LEDS = 30;
    const blankSquares: string[] = [];
    for (var i=0; i<NUM_LEDS; i++) {
        blankSquares.push("#c4c4c4");
    }

    var patternSquares = template.length>0 ? template.concat(template) : blankSquares;

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
