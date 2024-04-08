import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../services/states/store";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Header",
    decorators: [(story) => <Provider store={store}>{story()}</Provider>]
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    args: {

    }
}
