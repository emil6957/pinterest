import React from "react";
import "./PasswordInput.scss";

const PasswordInput = ({ }) => {
    return (
        <div className="password-input">
            <label className="password-input__label" htmlFor="password">Password</label>
            <input className="password-input__input" placeholder="Password" type="password" name="password" id="password" />
        </div>
    );
}

export default PasswordInput;