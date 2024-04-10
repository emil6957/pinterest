import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import "./HeaderLoggedIn.scss";

type HeaderLoggedInProps = {

}

// TODO: Make searchbar
// TODO: Make notifications button
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
        </header>
    )
}

export default HeaderLoggedIn;
