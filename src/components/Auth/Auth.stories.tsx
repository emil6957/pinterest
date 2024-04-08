import type { Meta, StoryObj } from "@storybook/react";
import Auth from "./Auth";
import { Provider } from "react-redux";
import { store } from "../../services/states/store";

const meta: Meta<typeof Auth> = {
    component: Auth,
    title: "Auth",
    decorators: [(story) => <Provider store={store}>{story()}</Provider>]
}

export default meta;

type Story = StoryObj<typeof meta>;
export const Base: Story = {
    args: {
    }
}
