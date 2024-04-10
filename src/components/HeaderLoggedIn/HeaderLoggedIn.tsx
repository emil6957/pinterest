import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderLoggedIn.scss";
import { ReactComponent as NotificationBell } from "../../assets/images/notification-icon.svg"

type HeaderLoggedInProps = {

}

// TODO: Make Profile Icon
// TODO: Make Profile Settings page

const HeaderLoggedIn = ({ }: HeaderLoggedInProps) => {
    return (
        <header className={"header-logged-in"}>
            <div className="header-logged-in__links-wrapper">
                <button className="header-logged-in__btn">Today</button>
                <button className="header-logged-in__btn">Explore</button>
            </div>
            <SearchBar />
            <button className="header-logged-in__notification-btn">
                <NotificationBell className="header-logged-in__icon" />
            </button>
        </header>
    )
}

export default HeaderLoggedIn;
