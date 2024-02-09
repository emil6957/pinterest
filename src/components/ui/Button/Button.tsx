import React from "react";
import { FC } from "react";
import "./Button.scss";

interface ButtonProps { 
    title: String; 
    style: "red" | "google";
}

const Button:FC<ButtonProps> = ({ title, style }) => {
    return (
        <button className={`button button--${style}`}>{title}</button>
    )
}

export default Button;