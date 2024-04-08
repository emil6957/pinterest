import React from "react";
import "./Auth.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../services/states/store";
import AuthTop from "../AuthTop/AuthTop";
import AuthBottom from "../AuthBottom/AuthBottom";
import SignupForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import Button from "../ui/Button/Button";
import { ReactComponent as GoogleIcon } from "../../assets/images/google-icon.svg";

type AuthProps = {
    authRef: any
}

const Auth = ({ authRef }: AuthProps) => {
    const isSigningUp = useSelector((State: RootState) => State.isSigningUp.value);

    return (
        <div className="auth" ref={authRef}>
            <AuthTop />
            {isSigningUp ? <SignupForm /> : <LoginForm />}
            <p>OR</p>
            <Button title={"Continue with Google"} style={"google"} size="lg" icon={{ img: <GoogleIcon />, position: "end" }} />
            <AuthBottom />
        </div>
    )
}

export default Auth;
