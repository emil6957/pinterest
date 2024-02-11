import React from "react";
import "./PasswordInput.scss";
import { ReactComponent as ShowPassword } from "../../../assets/images/show-password.svg";
import { ReactComponent as HidePassword } from "../../../assets/images/hide-password.svg";
import VisibilityToggle from "../VisibilityToggle/VisibilityToggle";

const PasswordInput = ({ }) => {
    return (
        <div className="password-input">
            <label className="password-input__label" htmlFor="password">Password</label>
            <div className="password-input__field-container">
                <input className="password-input__field" placeholder="Password" type="password" name="password" id="password" />
                <VisibilityToggle />
            </div>
            <div>
                <a href="">Forgot your Password?</a>
            </div>
        </div>
    );
}

export default PasswordInput;