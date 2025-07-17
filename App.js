import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="logo" src="https://i.pinimg.com/originals/3d/a0/00/3da000e71ddc31ec29da41266b182ade.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}

const styleCard = {
    
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg" />
            <h3>Meghana Foods</h3>
            <h4>Biryani, Asian, North Indian</h4>
            <h4>4.4 stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
