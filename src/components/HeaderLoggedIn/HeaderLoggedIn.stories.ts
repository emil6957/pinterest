import type { Meta, StoryObj } from "@storybook/react";
import HeaderLoggedIn from "./HeaderLoggedIn";

const meta: Meta<typeof HeaderLoggedIn> = {
    component: HeaderLoggedIn,
    title: "HeaderLoggedIn",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
    }
}
