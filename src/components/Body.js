import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    const [searchText, setSearchText] = useState("");

    console.log("Body Rendered");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    return listOfRestaurants.length === 0 ?
        (<Shimmer>   </Shimmer>) :
        (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input type="text" placeholder="Search" className="search-box"
                        value={ searchText } onChange={ (e) => setSearchText(e.target.value) } />
                        <button onClick={ () => {
                            const filteredList = listOfRestaurants.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                            setFilteredRestaurants(filteredList);
                        }} >Search</button>
                    </div>

                    <button className="filter-btn" onClick={() => {
                        let filteredRestaurants = listOfRestaurants.filter((restaurant) => {
                            return restaurant.info.avgRating > 4.2;
                        });
                        setFilteredRestaurants(filteredRestaurants);
                        console.log("Top rated restaurants", filteredRestaurants);
                    }}
                    >Top Rated Restaurants</button>
                </div>
                <div className="res-container">
                    {
                        filteredRestaurants.map((restaurant) => (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))
                    }
                </div>
            </div>
        );
};

export default Body;