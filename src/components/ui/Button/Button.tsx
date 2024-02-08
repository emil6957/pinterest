import React from "react";
import { FC } from "react";
import "./Button.scss";

interface ButtonProps { 
    title: String; 
}

const Button:FC<ButtonProps> = ({ title }) => {
    return (
        <button className="button">{title}</button>
    )
}

export default Button;