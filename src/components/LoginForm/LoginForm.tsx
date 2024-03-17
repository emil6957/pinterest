import React from "react";
import "./LoginForm.scss";
import EmailInput from "../ui/EmailInput/EmailInput";
import PasswordInput from "../ui/PasswordInput/PasswordInput";
import Button from "../ui/Button/Button";
import { useForm, SubmitHandler } from "react-hook-form";

type FormFields = {
    email: string;
    password: string;
}

const LoginForm = ({}) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormFields>();

    const onSubmit: SubmitHandler<FormFields> = (data) => {
        console.log(data);
    }


    return (
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
            <EmailInput register={register} errors={errors} />
            <PasswordInput register={register} errors={errors} showForgotPassword={true} />
            <Button title="Log In" style="red" size="lg" />
        </form>
    );
}

export default LoginForm;