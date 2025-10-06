import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";


test("Should render RestaurantCard component with props", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);

    const name = screen.getByText("Kamath Hotel");

    expect(name).toBeInTheDocument();
});

// test("Should render RestaurantCard component with Promoted label", () => {
//     render(withPromotedLabel(RestaurantCard)({ resData: MOCK_DATA }));

//     const promotedLabel = screen.getByText("Promoted");

//     //Assertion
//    expect(promotedLabel).toBeInTheDocument();
// });