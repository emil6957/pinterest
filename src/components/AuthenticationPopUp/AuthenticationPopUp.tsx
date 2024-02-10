import "./AuthenticationPopUp.scss";
import React from "react";
import Button from "../ui/Button/Button";
import LoginForm from "../LoginForm/LoginForm";
import AuthTop from "../AuthTop/AuthTop"; 

const AuthenticationPopUp = ({ }) => {

    return (
        <div className="authentication-popup">
            <AuthTop />
            <LoginForm />
            <p>OR</p>
            <Button title={"Continue with Google"} style={"google"} />
        </div>
    )
}

export default AuthenticationPopUp;