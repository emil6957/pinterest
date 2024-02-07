import React from "react";
import { FC } from "react";
import "./Button.scss";

interface button { 
    title: String; 
}

const Button:FC<button> = ({ title }) => {
    return (
        <div>
            <button>{title}</button>
        </div>
    )
}

export default Button;