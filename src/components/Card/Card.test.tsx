import { render } from "@testing-library/react";
import { describe } from "vitest";
import { Card } from ".";

const mockSprite = {
     front_default: "string",
    front_shiny: "string",
    back_default: "string",
    back_shiny: "string"
}

describe("Card component tests", () => {
    it("should render Card component", () => {
        const {getByText} = render(<Card name="bo" id={1} sprites={mockSprite}/>);
        expect(getByText("1 - BO")).toBeTruthy();
    });
})