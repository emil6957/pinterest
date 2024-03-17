import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
    test("renders without crashing", () => {
        render(<Button style="red" title="Test" size="lg"/>);
        const component = screen.getByText("Test");
        expect(component).toBeInTheDocument();
    });

    test("can be clicked", () => {
        render(<Button style="red" title="Test" size="lg"/>)
        const component = screen.getByText("Test");
        fireEvent.click(component);
        expect(component).toBeCalled()
    });
})