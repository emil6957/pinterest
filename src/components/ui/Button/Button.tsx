import React, { ReactElement } from "react";
import "./Button.scss";

// ? Might need to change the icon: ReactElement so its specifices SVG elements

type ButtonProps = { 
    title: String; 
    style: "red" | "google";
    icon?: {
        img: ReactElement;
        position: "start" | "end";
    }
}

const Button = ({ title, style, icon}:ButtonProps) => {
    return (
        <div className="button">
            <button className={`button__main button__main--${style}`}>{title}</button>
            {icon && <div className={`button__icon button__icon--pos-${icon.position}`}>
                {icon.img}
            </div>}
        </div>
    )
}

export default Button;