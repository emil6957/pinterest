import React, { useState, useEffect } from "react";
import "./Hero.scss";
import Card from "../Card/Card";
import image from "../../assets/images/image.png";

type HeroProps = {

}

const Hero = ({ }: HeroProps) => {
    const [carouselText, setCarouselText] = useState<string[]>(["Test", "Second Test", "Another Test", "Last Test",]);
    const [carouselSelection, setCarouselSelection] = useState<number>(0);
    const [carouselTimerId, setCarouselTimerId] = useState<number>(0);
    const [carouselIntervalDuration, setCarouselIntervalDuration] = useState<number>(6000);

    const nextCarouselItem = (): void => {
        setCarouselSelection(prevState => {
            if (prevState === carouselText.length - 1) {
                return 0;
            } else {
                return prevState + 1
            }
        });
    }

    // ! Using window.setInterval to avoid a bug of different types when using variable func
    const resetTimer = (timer: number, func: Function, ms: number) => {
        clearInterval(timer);
        const newTimer: number = window.setInterval(func, ms);
        setCarouselTimerId(newTimer);
    }

    const handleCarouselButton = (i: number, timer: number, func: Function, ms: number) => {
        setCarouselSelection(i);
        resetTimer(timer, func, ms);
    }

    useEffect(() => {
        const timer: number = window.setInterval(nextCarouselItem, carouselIntervalDuration);
        setCarouselTimerId(timer);

        return () => {
            clearInterval(carouselTimerId);
        }
    }, []);

    let Cards = [];

    const columns = 7;
    const rows = 3;
    for (let i = 0; i < columns * rows; i++) {
        Cards.push(<div key={i} className="hero__card-container"><Card size="sm" img={image} /></div>)
    }

    const carouselTitles = carouselText.map((curr, i) =>
        <li key={i}><p className={`hero__title hero__carousel-text ${carouselSelection === i ? "active" : ""}`}>{curr}</p></li>
    )

    const carouselButtons = carouselText.map((curr, i) =>
        <li key={i}><button onClick={() => handleCarouselButton(i, carouselTimerId, nextCarouselItem, carouselIntervalDuration)} className={`hero__carousel-button ${carouselSelection === i ? "active" : ""}`} /></li>
    );

    return (
        <div className="hero">
            <div className="hero__title-container">
                <h1 className="hero__title">Get your next</h1>
                <div className="hero__carousel">
                    <ul className="hero__carousel-titles">
                        {carouselTitles}
                    </ul>
                    <ul className="hero__carousel-buttons">
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
