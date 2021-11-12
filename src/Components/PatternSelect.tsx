import { useContext } from "react";
import { LEDSquare } from './LEDSquare';
import './ledsquare.css';
import { PatternContext } from './../App';

export const PatternSelect = (input: { template : [] }) => {
    var { pattern } = useContext(PatternContext);

    return (
        <div className = "patternSelectContainer">
            {/* <div className="arrowLeft" ></div> */}
            <div className = "patternSelect">
                {pattern.map((squareColor: string, index: any) => {
                    return <LEDSquare key={index} colorString={squareColor} index={index} onChange={() => {}}/>
                })}
            </div>
            {/* <div className="arrowRight"></div> */}
        </div>
    )
}
