import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { ReactComponent as GoogleIcon} from "../../../assets/images/google-icon.svg";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const GoogleImageLarge: Story = {
    args: {
        title: "Button",
        style: "google",
        size: "lg",
        icon: {img: <GoogleIcon />, position: "end"},
    }
}

export const RedMedium: Story = {
    args: {
        title: "Button",
        style: "red",
        size: "md",
    }
}

export const GraySmall: Story = {
    args: {
        title: "Button",
        style: "gray",
        size: "sm",
    }
}
