import React from "react";
import "./LoginForm.scss";
import PasswordInput from "../ui/PasswordInput/PasswordInput";
import EmailInput from "../ui/EmailInput/EmailInput";
import Button from "../ui/Button/Button";

const LoginForm = ({}) => {

    return (
        <form className="login-form" action="">
            <EmailInput />
            <PasswordInput />
            <Button style="red" title="Log In" />
        </form>
    );
}

export default LoginForm;