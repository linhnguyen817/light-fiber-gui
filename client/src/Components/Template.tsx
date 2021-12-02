import './template.css';
import { rainbowTemplate, gradientTemplate, blankTemplate } from './../constants';

function getColorStrip(templateName: string): string[] {
    switch (templateName) {
        case "rainbow":
            return rainbowTemplate;
        case "gradient":
            return gradientTemplate;
        case "blank":
            return blankTemplate;
        default:
            return [];
    }
} 

export const Template = (input: {templateName: string} ) => {
    var templateName = input.templateName;
    const colorStrip = getColorStrip(templateName);
    return (
        <div className="template">
            <div className="template-color-strip">
                {colorStrip.map((color, i) => {
                    return <div key={i} className="template-box" style={{backgroundColor: color}}/>
                })}
            </div>
            <p className="template-label">{templateName}</p>
        </div>
    )
}