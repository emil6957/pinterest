import React, { FC } from "react";
import "./EmailInput.scss"
import { FieldErrors, UseFormRegister } from "react-hook-form";

type EmailInputProps = {
    register: UseFormRegister<any>;
    errors: FieldErrors<any>;
}

const EmailInput = ({ register, errors }: EmailInputProps) => {
    return (
        <div className="email-input">
            <label className="email-input__label" htmlFor="email">Email</label>
            <input {...register("email", {required: "Email is required", pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g})} className="email-input__input" type="email" placeholder="Email" name="email" id="email" />
            {errors.email && <span>{}</span>}
        </div>
    )
}

export default EmailInput;