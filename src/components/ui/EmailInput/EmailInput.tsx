import React, { FC } from "react";

interface EmailInputProps {
}

const EmailInput:FC<EmailInputProps> = ({ }) => {
    return (
        <div className="email-input">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" id="email" />
        </div>
    )
}

export default EmailInput;