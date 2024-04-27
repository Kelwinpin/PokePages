import { describe, it } from "vitest";
import { Home } from ".";
import { render } from "@testing-library/react";

describe("Home page Test", ()=>{
    it("should render Home page", ()=>{
        const {getByText} = render(<Home />);

        const title = getByText("PokePages")

        expect(title).toBeTruthy()
    });
})