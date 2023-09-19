import "./Button.css";

interface ButtonProps {
    text: string,
    onClick: () => void,
    uppercase?: boolean,
}

export default function Button({text, onClick, uppercase}: ButtonProps) {
    return (
        <button
        className="DefaultButton"
        onClick={onClick}>
            {uppercase ? text.toUpperCase() : text}
        </button>
    )
}