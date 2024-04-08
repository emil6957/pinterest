import React from "react";
import "./Header.scss";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import Button from "../ui/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../services/states/store";
import { toggle } from "../../services/states/ShowPopUpSlice/ShowPopUpSlice";
import { setFalse, setTrue } from "../../services/states/isSigningUp/isSigningUpSlice";
import AuthenticationPopUp from "../AuthenticationPopUp/AuthenticationPopUp";

type HeaderProps = {

}

const Header = ({ }: HeaderProps) => {
    const dispatch = useDispatch();
    const showPopUpSlice = useSelector((State: RootState) => State.ShowPopup.value);

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
                    <Button title="Log In" style="red" size="sm" onClick={() => { dispatch(toggle()); dispatch(setFalse()) }} />
                    <Button title="Sign Up" style="gray" size="sm" onClick={() => { dispatch(toggle()); dispatch(setTrue()) }} />
                    {
                        showPopUpSlice && <AuthenticationPopUp />
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
