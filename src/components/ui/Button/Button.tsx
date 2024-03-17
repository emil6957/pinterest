import React, { ReactElement } from "react";
import "./Button.scss";

// ? Might need to change the icon: ReactElement so its specifices SVG elements

type ButtonProps = { 
    title: String; 
    style: "red" | "google" | "gray";
    size: "lg" | "md" | "sm";
    icon?: {
        img: ReactElement;
        position: "start" | "end";
    }
}

const Button = ({ title, style, size, icon}:ButtonProps) => {
    return (
        <div className="button">
            <button className={`button__main button__main--${style} button__main--${size}`}>{title}</button>
            {icon && <div className={`button__icon button__icon--pos-${icon.position}`}>
                {icon.img}
            </div>}
        </div>
    )
}

export default Button;