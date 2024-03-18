import React from "react";
import "./Card.scss";

type CardProps = {
    size: "lg" | "md" | "sm",
    img: any,
}

const Card = ({ size, img }:CardProps) => {

    return (
        <div className={`card card--${size}`}>
            <img className="card__img" src={img} alt={img} />
        </div>
    )
}

export default Card;