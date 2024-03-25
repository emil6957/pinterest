import React from "react";
import "./HomePageLoggedOut.scss";
import Hero from "../../components/Hero/Hero";

type HomePageLoggedOutProps = {

}

const HomePageLoggedOut = ({ }:HomePageLoggedOutProps) => {
    return (
        <div className="home-page-logged-out">
            <section className="home-page-logged-out__hero">
                <Hero />
            </section>
            <section className="home-page-logged-out__section">
                <div className="home-page-logged-out__img"/>
                <p className="home-page-logged-out__text">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </section>

            <section className="home-page-logged-out__section">
                <div className="home-page-logged-out__img"/>
                <p className="home-page-logged-out__text">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </section>

            <section className="home-page-logged-out__section">
                <div className="home-page-logged-out__img"/>
                <p className="home-page-logged-out__text">
                    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
                </p>
            </section>
        </div>
    )
}

export default HomePageLoggedOut;
