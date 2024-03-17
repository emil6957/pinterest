import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
    component: PasswordInput,
    title: "Password Input",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
    }
}
