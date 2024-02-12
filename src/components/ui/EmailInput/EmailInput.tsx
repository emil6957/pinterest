import React, { FC } from "react";
import "./EmailInput.scss"

type EmailInputProps = {
}

const EmailInput = ({ }: EmailInputProps) => {
    return (
        <div className="email-input">
            <label className="email-input__label" htmlFor="email">Email</label>
            <input className="email-input__input" type="email" placeholder="Email" name="email" id="email" />
        </div>
    )
}

export default EmailInput;