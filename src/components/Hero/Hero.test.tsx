// Tests to write
// 1. Test whole component renders
// 2. Test cards render
// 3. Test carouselTitles render
// 4. Test carouselButtons render
// 5. Test timer gets set on page load
// 6. Test timer gets reset on carouselButton click
// 7. Test carouselSelection changes properly on carouselButton click
// 8. Test nextCarouselItem works properly

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Hero from "./Hero";

// TODO: Write tests

describe("<Hero />", () => {
    test("should render component", () => {
        render(<Hero />);
        const hero = screen.getByRole("div");
        expect(hero).toBeInTheDocument();
    })

    test("should render cards", () => {
        render(<Hero />);
    })

    test("button should fire event", () => {
        render(<Hero />);
        const button = screen.getByRole("button");
        fireEvent.click(button);
        expect(button).toBeCalled();
    })
});
