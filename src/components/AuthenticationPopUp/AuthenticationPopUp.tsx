import React from "react";
import Button from "../ui/Button/Button";
import EmailInput from "../ui/EmailInput/EmailInput";
import PasswordInput from "../ui/PasswordInput/PasswordInput";

const AuthenticationPopUp = ({ }) => {

    return (
        <div>
            <PasswordInput />
            <EmailInput />
            <Button title={"Log In"} />
            <Button title={"Continue with Google"} />
        </div>
    )
}

export default AuthenticationPopUp;