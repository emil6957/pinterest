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
        </div>
    )
}

export default HomePageLoggedOut;