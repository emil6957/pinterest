import type { Meta, StoryObj } from "@storybook/react";
import EmailInput from "./EmailInput";

const meta: Meta<typeof EmailInput> = {
    component: EmailInput,
    title: "Email Input",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}