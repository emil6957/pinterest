import type { Meta, StoryObj } from "@storybook/react";
import HomePageLoggedIn from "./HomePageLoggedIn";

const meta: Meta<typeof HomePageLoggedIn> = {
    component: HomePageLoggedIn,
    title: "HomePageLoggedIn",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
    }
}