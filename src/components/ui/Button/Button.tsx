import React, { ReactElement } from "react";
import "./Button.scss";

// ? Might need to change the icon: ReactElement so its specifices SVG elements
// ! Change line 15 (onCliCk) to not be optional once i have all buttons have functions

type ButtonProps = { 
    title: String; 
    style: "red" | "google" | "gray";
    size: "lg" | "md" | "sm";
    icon?: {
        img: ReactElement;
        position: "start" | "end";
    }
    onClick?: any
}

const Button = ({ title, style, size, icon, onClick}:ButtonProps) => {
    return (
        <div className="button">
            <button onClick={() => onClick()} className={`button__main button__main--${style} button__main--${size}`}>{title}</button>
            {icon && <div className={`button__icon button__icon--pos-${icon.position}`}>
                {icon.img}
            </div>}
        </div>
    )
}

export default Button;