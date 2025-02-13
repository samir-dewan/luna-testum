import "./Button.css";

interface ButtonProps {
    text: string,
    onClick: () => void,
    uppercase?: boolean,
    additionalClass?: string,
}

export default function Button({text, onClick, uppercase, additionalClass}: ButtonProps) {

    return (
        <button
        className={additionalClass ? `DefaultButton ${additionalClass} ` : "DefaultButton"}
        onClick={onClick}>
            {uppercase ? text.toUpperCase() : text}
        </button>
    )
}