import type { Meta, StoryObj } from "@storybook/react";
import AuthenticationPopUp from "./AuthenticationPopUp";
import { Provider } from "react-redux";
import { store } from "../../services/states/store";

const meta: Meta<typeof AuthenticationPopUp> = {
    component: AuthenticationPopUp,
    title: "AuthenticationPopUp",
    decorators: [(story) => <Provider store={store}>{story()}</Provider>]
}

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
    args: {
    }
}
