import './template.css';

const rainbowColors = ["#FF0000", "#FF8A00", "#FFF500", "#9EE05C", "#1ED700", "#65E5D6", "#2097DB", "#3242D0", "#B240CF", "#D64EA8"];
const gradientColors = ["#BE0505", "#D40000", "#FF0000", "#FF4040", "#FF6D6D", "#FF8B8B", "#FFB0B0", "#FAC9C9", "#FFDDDD", "#FFEBEB"];
const blankColors = ["#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", "#C4C4C4", ]

// TODO: Fix malfunctioning string matching here to remove hardcoded templates later
function getColorStrip(templateName: string): string[] {
    // templateName = "rainbow";
    // console.log(""+templateName);
    switch (templateName) {
        case "rainbow":
            return rainbowColors;
        case "blank":
            return blankColors;
        default:
            return [];
            // throw Error("Bad input: Template does not exist");
    }
        
} 

export const RainbowTemplate = (templateName: string) => {
    const colorStrip = getColorStrip("blank");
    return (
        <div className="template">
            <div className="template-color-strip">
                {rainbowColors.map((color, i) => {
                    return <div key={i} className="template-box" style={{backgroundColor: color}}/>
                })}
            </div>
            <p className="template-label">Rainbow</p>
        </div>
    )
}

export const GradientTemplate = (templateName: string) => {
    const colorStrip = getColorStrip("blank");
    return (
        <div className="template">
            <div className="template-color-strip">
                {gradientColors.map(color => {
                    return <div className="template-box" style={{backgroundColor: color}}/>
                })}
            </div>
            <p className="template-label">Gradient</p>
        </div>
    )
}

export const BlankTemplate = (templateName: string) => {
    const colorStrip = getColorStrip("blank");
    return (
        <div className="template">
            <div className="template-color-strip">
                {blankColors.map(color => {
                    return <div className="template-box" style={{backgroundColor: color}}/>
                })}
            </div>
            <p className="template-label">Blank</p>
        </div>
    )
}