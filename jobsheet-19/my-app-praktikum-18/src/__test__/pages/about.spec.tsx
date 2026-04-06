import "@testing-library/jest-dom"
import {render} from "@testing-library/react";
import About from "../../pages/about";

describe("About Page", () => {
    it("renders about page correctly", () => {
        const page = render(<About/>)
        expect(page).toMatchSnapshot();
    })
})