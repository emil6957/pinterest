import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Card from "../Card/Card";
import image from "../../assets/images/image.png";

// TODO Create a dot carousel

type HeroProps = {

}

const Hero = ({}:HeroProps) => {
    const [carouselText, setCarouselText] = useState(["Test","Second Test", "Another Test", "Last Test",]);
    const [carouselSelection, setCarouselSelection] = useState(0);

    useEffect(() => {
      const nextCarouselItem = () => {
        setCarouselSelection(prevState => {
            if( prevState === carouselText.length-1 ) {
                return 0;
            } else { 
                return prevState+1
            }
        });
      }

      const timer = setInterval(nextCarouselItem, 6000)

      return () => {
          clearInterval(timer);
      }
    }, [])


    let Cards = [];

    const columns = 7;
    const rows = 3;
    for(let i = 0; i < columns*rows; i++) {
        Cards.push(<div key={i} className="hero__card-container"><Card size="sm" img={image} /></div>)
    }

    const carouselButtons = carouselText.map((curr, i) => 
        <li key={i}><button className={`hero__carousel-button ${carouselSelection === i ? "active" : ""}`}/></li>
    );

    return (
        <div className="hero">
            <div className="hero__title-container">
                <h1 className="hero__title">Get your next</h1>
                <div className="hero__carousel">
                    <h1 className="hero__title">{carouselText[carouselSelection]}</h1>
                    <ul className="hero__carousel-list">
                        {carouselButtons}
                    </ul>
                </div>
            </div>
            <div className="hero__cards-wrapper">
                {Cards}
            </div>
        </div>
    )
};

export default Hero;
