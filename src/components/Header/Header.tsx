import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Button from "../ui/Button/Button";
import { useDispatch } from "react-redux";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";
import { setFalse, setTrue } from "../../services/states/isSigningUp/isSigningUpSlice";

type HeaderProps = {

}

const Header = ({}:HeaderProps) => {
    const dispatch = useDispatch();

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
                    <Button title="Log In" style="red" size="sm" onClick={() => {dispatch(toggle()); dispatch(setFalse())}}/>
                    <Button title="Sign Up" style="gray" size="sm" onClick={() => {dispatch(toggle()); dispatch(setTrue())}}/>
                </div>
            </div>
        </header>
    )
}

export default Header;