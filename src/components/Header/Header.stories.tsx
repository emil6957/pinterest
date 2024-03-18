import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { Provider } from "react-redux";
import { store } from "../../services/states/store";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Header",
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
    render: (args) => <Provider store={store}>
        <div>
            <Header />
        </div>
    </Provider>
}