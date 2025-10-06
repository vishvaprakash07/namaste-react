import { render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react";
import MOCK_DATA from "../mocks/resListDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

test("Should render Body component with Search", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        );
    });

    const searchButton = screen.getByRole("button", { name: "Search" });
    console.log(searchButton);

    //Assertion
    expect(searchButton).toBeInTheDocument();
});