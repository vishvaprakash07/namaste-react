import { act } from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom"; 

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load Restaurant Menu component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Pasta (10)");
  expect(accordionHeader).toBeInTheDocument();

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("fooditems");
  expect(foodItems.length).toBe(10);

  expect(screen.getByText("Cart - 0")).toBeInTheDocument();

  const addButton = screen.getAllByRole("button", { name: "Add +"});
  fireEvent.click(addButton[0]);

  expect(screen.getByText("Cart - 1")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(11);

  const clearCartButton = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartButton);

  expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
  expect(screen.getAllByTestId("fooditems").length).toBe(10);


});
