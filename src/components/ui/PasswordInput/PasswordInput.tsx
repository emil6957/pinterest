import React from "react";
import "./PasswordInput.scss";
import { ReactComponent as ShowPassword } from "../../../assets/images/show-password.svg";
import { ReactComponent as HidePassword } from "../../../assets/images/hide-password.svg";
import VisibilityToggle from "../VisibilityToggle/VisibilityToggle";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type PasswordInputProps = {
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
    showForgotPassword: Boolean;
}

const PasswordInput = ({ register, errors, showForgotPassword }:PasswordInputProps) => {
    return (
        <div className="password-input">
            <label className="password-input__label" htmlFor="password">Password</label>
            <div className="password-input__field-container">
                <input {...register("password", {required: "Password is required"})} className="password-input__field" placeholder="Password" type="password" name="password" id="password" />
                <VisibilityToggle />
            </div>
            {showForgotPassword && <div>
                <a href="">Forgot your Password?</a>
            </div>}
        </div>
    );
}

export default PasswordInput;