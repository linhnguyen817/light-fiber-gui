import './template.css';

const rainbowColors = ["#FF0000", "#FF8A00", "#FFF500", "#9EE05C", "#1ED700", "#65E5D6", "#2097DB", "#3242D0", "#B240CF", "#D64EA8"];
const gradientColors = ["#BE0505", "#D40000", "#FF0000", "#FF4040", "#FF6D6D", "#FF8B8B", "#FFB0B0", "#FAC9C9", "#FFDDDD", "#FFEBEB"];
const blankColors = ["#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", ]

function getColorStrip(templateName: string): string[] {
    switch (templateName) {
        case "rainbow":
            return rainbowColors;
        case "gradient":
            return gradientColors;
        case "blank":
            return blankColors;
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