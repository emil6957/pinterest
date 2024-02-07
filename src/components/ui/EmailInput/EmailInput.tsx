import React, { FC } from "react";

interface emailinput {
}

const EmailInput:FC<emailinput> = ({ }) => {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" name="email" id="email" />
        </div>
    )
}

export default EmailInput;