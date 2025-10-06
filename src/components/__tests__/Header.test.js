import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from 'react-redux';
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should render Header component with a Login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login"});

    //Assertion
    expect(loginButton).toBeInTheDocument();
});

test("Should render Header component with cart items 0", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - 0");

    //Assertion
    expect(cartItems).toBeInTheDocument();
});

test("Should render Header component with cart item", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    //Assertion
    expect(cartItems).toBeInTheDocument();
});

test("Should change Login button name to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    //Assertion
    expect(logoutButton).toBeInTheDocument();

});



