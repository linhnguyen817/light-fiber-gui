import {LEDSquare} from './LEDSquare'
import './ledsquare.css';

const LeftArrow = () => {
    return <div className="arrowLeft" ></div>
}

export const PatternSelect = () => {
    const NUM_LEDS = 30;
    const squares = []
    for (var i=0; i<NUM_LEDS; i++) {
        squares.push(i)
    }
    return (
        
    <div className = "patternSelectContainer">
        <LeftArrow/>
        <div className = "patternSelect">
            {squares.map(index => (
                <LEDSquare key={index} onChange={() => {}}/>
            ))}
        </div>
        <div className="arrowRight"></div>
    </div>
    )
}