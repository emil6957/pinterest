import type { Meta, StoryObj } from "@storybook/react";
import EmailInput from "./EmailInput";
import { FieldErrors, UseFormRegister, useForm } from "react-hook-form";

const meta: Meta<typeof EmailInput> = {
    component: EmailInput,
    title: "Email Input",
}

export default meta;

type Story = StoryObj<typeof meta>;

const { register, handleSubmit, formState: { errors }, } = useForm();

export const Base: Story = {
    args: {
        // register,
        // errors,
    }
}