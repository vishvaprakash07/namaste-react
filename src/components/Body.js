import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(restaurants);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    let filteredRestaurants = listOfRestaurants.filter((restaurant) => {
                        return restaurant.info.avgRating > 4.3;
                    });
                    setlistOfRestaurants(filteredRestaurants);
                    console.log("Top rated restaurants", filteredRestaurants);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                }
            </div>
        </div>
    );
};

export default Body;