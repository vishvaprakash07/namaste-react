import { fireEvent, render, screen } from "@testing-library/react";
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

test("Should search Restaurant List for pizza input", async () => {
    await act(async () => {
        render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
        );
    });

    const cardsbeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsbeforeSearch.length).toBe(8);

    const searchButton = screen.getByRole("button", { name: "Search" });
    console.log(searchButton);

    //Assertion
    expect(searchButton).toBeInTheDocument();

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchButton);

    // screen should have only 1 card
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(2);
});


test("Should search for Top Rated restaurants", async() => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRestaurantsButton = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(topRestaurantsButton);

    const cardsAfterFilter =  screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(6);
});
