import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";

type HeaderProps = {

}

const Header = ({}:HeaderProps) => {
    return (
        <header className="header">
            <div className="header__home">
                <button className="header__home-btn">
                    <Logo />
                    <h1>Pinterest</h1>
                </button>
            </div>
            <div className="header__btns">
                <button>Today</button>
                <button>Watch</button>
                <button>Explore</button>
            </div>
            <div className="header__btns">
                <button>About</button>
                <button>Business</button>
                <button>Blog</button>
            </div>
            <div className="header__authentication">
                <button>Log in</button>
                <button>Sign in</button>
            </div>
        </header>
    )
}

export default Header;