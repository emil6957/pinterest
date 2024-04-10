import React from "react";
import "./SearchBar.scss";
import { ReactComponent as SearchIcon } from "../../assets/images/search-icon.svg";

type SearchBarProps = {

}

// TODO: Get search-bar icon

const SearchBar = ({ }: SearchBarProps) => {
    return (
        <div className="search-bar">
            <SearchIcon className="search-bar__icon" />
            <input className="search-bar__input" type="text" placeholder="Search" />
        </div>
    )
}

export default SearchBar;
