import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import './ledsquare.css';
import OutsideClickHandler from 'react-outside-click-handler';

export interface LEDSquareProps {
    onChange: (value: string) => void;
    colorString: string;
  }

export const LEDSquare : FunctionComponent<LEDSquareProps>  = ({onChange, colorString}) => {
    const [colorPicker, showColorPicker] = useState(false);
    console.log(colorString, "string color");

    const [squareColor, changeColor] = useState(colorString);
    console.log(squareColor, "square color");

    useEffect(() => {
        console.log("override");
        onChange(squareColor);
    }, [squareColor]);
    
    useEffect(() => {
        if(colorString!=squareColor) {
            changeColor(colorString);
        }
    }, [colorString])

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
                    onChangeComplete={color => changeColor(color.hex)}
                />
            </div>}
        </div>
        </OutsideClickHandler>
    )
}
