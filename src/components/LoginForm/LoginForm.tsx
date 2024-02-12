import React from "react";
import "./LoginForm.scss";
import EmailInput from "../ui/EmailInput/EmailInput";
import PasswordInput from "../ui/PasswordInput/PasswordInput";
import Button from "../ui/Button/Button";

const LoginForm = ({}) => {

    return (
        <form className="login-form" action="">
            <EmailInput />
            <PasswordInput showForgotPassword={true} />
            <Button title="Log In" style="red" />
        </form>
    );
}

export default LoginForm;