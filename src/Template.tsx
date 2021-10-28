import './template.css';

const rainbowColors = ["#FF0000", "#FF8A00", "#FFF500"];

export const Template = () => {
    return (
        <div>
            {rainbowColors.map(color => {
                return <div className="box" style={{backgroundColor: color}}/>
            })}
        </div>
    )
}