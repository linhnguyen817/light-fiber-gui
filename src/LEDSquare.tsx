import { FunctionComponent, useEffect, useRef, useState } from 'react';
import { SketchPicker } from 'react-color';
import './ledsquare.css';

export interface LEDSquareProps {
    onChange: (value: string) => void;
  }

export const LEDSquare : FunctionComponent<LEDSquareProps>  = ({onChange}) => {
    const [colorPicker, showColorPicker] = useState(false);
    const [squareColor, changeColor] = useState("#C4C4C4");
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
    )
}
