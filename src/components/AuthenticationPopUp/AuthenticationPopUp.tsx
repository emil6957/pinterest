import React from "react";
import Button from "../ui/Button/Button";
import EmailInput from "../ui/EmailInput/EmailInput";
import PasswordInput from "../ui/PasswordInput/PasswordInput";

const AuthenticationPopUp = ({ }) => {

    return (
        <div>
            <PasswordInput />
            <EmailInput />
            <Button title={"Log In"} style={"red"} />
            <Button title={"Continue with Google"} style={"google"} />
        </div>
    )
}

export default AuthenticationPopUp;