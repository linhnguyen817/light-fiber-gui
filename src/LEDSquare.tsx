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
    const [squareColor, changeColor] = useState(colorString ? colorString : "#C4C4C4");
    const componentMounted = useRef(true);

    useEffect(() => {
        if (componentMounted.current) {
            componentMounted.current = false;
        } else {
            onChange(squareColor);
        }        
        return () => undefined;
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
                    onChangeComplete={color => changeColor(color.hex)}
                />
            </div>}
        </div>
        </OutsideClickHandler>
    )
}
