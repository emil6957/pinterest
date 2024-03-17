import React from "react";
import "./SignupForm.scss";
import EmailInput from "../ui/EmailInput/EmailInput";
import PasswordInput from "../ui/PasswordInput/PasswordInput";
import BirthInput from "../ui/BirthInput/BirthInput";
import Button from "../ui/Button/Button";
import { useForm } from "react-hook-form";



const SignupForm = ({}) => {
    const { register, formState: {errors} } = useForm<any>();
    return (
        <form className="signup-form" action="">
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} showForgotPassword={false} />
            <BirthInput />
            <Button title="Continue" style="red" size="lg" />
        </form>
    )
}

export default SignupForm;