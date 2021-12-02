import { FunctionComponent, useEffect, useContext, useState } from 'react';
import { SketchPicker } from 'react-color';
import './ledsquare.css';
import OutsideClickHandler from 'react-outside-click-handler';
import { PatternContext } from '../App';

export const LEDSquare = ({onChange, colorString, index}) => {
    var { updatePatternSquare } = useContext(PatternContext);
    const [colorPicker, showColorPicker] = useState(false);
    const [squareColor, changeColor] = useState(colorString);

    // handles loading new template
    useEffect(() => {
        if(colorString!==squareColor) {
            changeColor(colorString);
            updatePatternSquare(colorString, index);
        }
    }, [colorString])

    useEffect(() => {
        onChange(squareColor);
        updatePatternSquare(squareColor, index);
    }, [squareColor]);
    

    return (
        <OutsideClickHandler onOutsideClick={() => {
            showColorPicker(false);
          }}>
        <div className="ledsquare">
            <div className="box" style={{backgroundColor: squareColor}}  
                onClick={() => showColorPicker(!colorPicker)}
            />
            {colorPicker && <div className="colorPicker">
                <SketchPicker 
                    color={squareColor}
                    onChangeComplete={color => changeColor(color.hex.toUpperCase())}
                />
            </div>}
        </div>
        </OutsideClickHandler>
    )
}
