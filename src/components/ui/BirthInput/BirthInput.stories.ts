import type { Meta, StoryObj } from "@storybook/react";
import BirthInput from "./BirthInput";

const meta: Meta<typeof BirthInput> = {
    component: BirthInput,
    title: "BirthInput",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
    }
}
