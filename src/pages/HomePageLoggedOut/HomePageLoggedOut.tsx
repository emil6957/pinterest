import React from "react";
import "./HomePageLoggedOut.scss";
import Hero from "../../components/Hero/Hero";
import Header from "../../components/Header/Header";
import { Provider } from "react-redux";
import { store } from "../../services/states/store";

type HomePageLoggedOutProps = {

}

const HomePageLoggedOut = ({ }:HomePageLoggedOutProps) => {
    return (
        <div className="home-page-logged-out">
            <Provider store={store}>
                <Header />
            </Provider>
            <Hero />

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
