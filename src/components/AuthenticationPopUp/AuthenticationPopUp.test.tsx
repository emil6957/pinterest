import { render, screen } from "@testing-library/react";
import AuthenticationPopUp from "./AuthenticationPopUp";

describe("<AuthenticationPopUp />", () => {
    test("loads without crashing", () => {
        render(<AuthenticationPopUp />)
    });
})