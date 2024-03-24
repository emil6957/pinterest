import React from "react";
import "./Hero.scss";
import Card from "../Card/Card";
import image from "../../assets/images/image.png";

// TODO Create a dot carousel

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
            <div className="hero__title-container">
                <h1 className="hero__title">Get your next</h1>
                <h1 className="hero__title">Test</h1>
            </div>
            <div className="hero__cards-wrapper">
                {Cards}
            </div>
        </div>
    )
};

export default Hero;
