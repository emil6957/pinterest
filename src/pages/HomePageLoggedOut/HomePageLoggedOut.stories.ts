import type { Meta, StoryObj } from "@storybook/react";
import HomePageLoggedOut from "./HomePageLoggedOut";

const meta: Meta<typeof HomePageLoggedOut> = {
    component: HomePageLoggedOut,
    title: "HomePageLoggedOut",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
    }
}