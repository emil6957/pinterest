import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

type HeaderProps = {

}

const Header = ({}:HeaderProps) => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__home">
                    <button className="header__home-btn">
                        <Logo />
                        <h1 className="header__home-btn-text">Pinterest</h1>
                    </button>
                </div>
                <div className="header__links-wrapper">
                    <button className="header__btn">Today</button>
                    <button className="header__btn">Watch</button>
                    <button className="header__btn">Explore</button>
                </div>
            </div>

            <div className="header__wrapper">
                <div className="header__links-wrapper">
                    <button className="header__btn">About</button>
                    <button className="header__btn">Business</button>
                    <button className="header__btn">Blog</button>
                </div>
                <div className="header__authentication">
                    <button>Log in</button>
                    <button>Sign in</button>
                </div>
            </div>
        </header>
    )
}

export default Header;