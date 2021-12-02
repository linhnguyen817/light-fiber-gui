import { useContext } from "react";
import { LEDSquare } from './LEDSquare';
import './ledsquare.css';
import { PatternContext } from '../App';

export const PatternSelect = (input) => {
    var { pattern } = useContext(PatternContext);

    return (
        <div className = "patternSelectContainer">
            {/* <div className="arrowLeft" ></div> */}
            <div className = "patternSelect">
                {pattern.map((squareColor, index) => {
                    return <LEDSquare key={index} colorString={squareColor} index={index} onChange={() => {}}/>
                })}
            </div>
            {/* <div className="arrowRight"></div> */}
        </div>
    )
}
