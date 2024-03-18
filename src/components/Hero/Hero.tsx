import React from "react";
import "./Hero.scss";
import Card from "../Card/Card";
import image from "../../assets/images/image.png";

type HeroProps = {

}

const Hero = ({}:HeroProps) => {

    let Cards = [];

    const columns = 7;
    const rows = 3;
    for(let i = 0; i < columns*rows; i++) {
        Cards.push(<div className="hero__card-container"><Card size="sm" img={image} /></div>)
    }

    return (
        <div className="hero">
            {Cards}
        </div>
    )
};

export default Hero;