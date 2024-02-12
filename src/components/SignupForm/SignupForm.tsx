import React from "react";
import "./SignupForm.scss";
import EmailInput from "../ui/EmailInput/EmailInput";
import PasswordInput from "../ui/PasswordInput/PasswordInput";
import BirthInput from "../ui/BirthInput/BirthInput";
import Button from "../ui/Button/Button";

const SignupForm = ({}) => {
    return (
        <form className="signup-form" action="">
            <EmailInput />
            <PasswordInput showForgotPassword={false} />
            <BirthInput />
            <Button title="Continue" style="red" />
        </form>
    )
}

export default SignupForm;