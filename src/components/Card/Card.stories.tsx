import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

const meta: Meta<typeof Card> = {
    component: Card,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeCard: Story = {
    args: {
        size: "lg",
        img: "/image.png",
    }
}

export const MediumCard: Story = {
    args: {
        size: "md",
        img: "/image.png",
    }
}

export const SmallCard: Story = {
    args: {
        size: "sm",
        img: "/image.png",
    }
}

export const SeveralCards: Story = {
    render: (args) => <div style={{display: "flex", gap: "5rem"}}>
        <Card size="lg" img="/image.png" />
        <Card size="md" img="/image.png" />
        <Card size="sm" img="/image.png" />
    </div>
    
}