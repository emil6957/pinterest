import type { Meta, StoryObj } from "@storybook/react";
import Hero from "./Hero";

const meta: Meta<typeof Hero> = {
    component: Hero,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {
    }
}