import React from "react";
import "./AuthenticationPopUp.scss";
import Button from "../ui/Button/Button";
import LoginForm from "../LoginForm/LoginForm";
import AuthTop from "../AuthTop/AuthTop"; 
import { ReactComponent as GoogleIcon} from "../../assets/images/google-icon.svg";
import SignupForm from "../SignupForm/SignupForm";
import AuthBottom from "../AuthBottom/AuthBottom";

const AuthenticationPopUp = ({ }) => {
    return (
        <div className="authentication-popup">
            <div className="authentication-popup__wrapper">
                <AuthTop />
                {false ? <LoginForm /> : <SignupForm />}
                <p>OR</p>
                <Button title={"Continue with Google"} style={"google"} icon={{img: <GoogleIcon />, position: "end"}}/>
                <AuthBottom />
            </div>
        </div>
    )
}

export default AuthenticationPopUp;