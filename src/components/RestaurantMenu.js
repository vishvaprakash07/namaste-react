import { useState, useEffect } from 'react';
import Shimmer from './Shimmer';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=107827&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log("Menu Data",json);
        setResInfo(json);
    };

    if(resInfo===null) {
        return <Shimmer />;
    }

    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.data?.cards[2].card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 
    console.log("Item Cards", itemCards);

    return (
        <div className="menu">
            <h1>{ name }</h1>
            <h3>Cusinies: { cuisines.join(',') } - { costForTwoMessage }</h3>
            <h2>Menu</h2>
            <ul>
                { itemCards.map((item) => 
                    <li key={ item?.card?.info?.id }>
                        { item?.card?.info?.name } - ₹{ item?.card?.info?.price / 100 }
                    </li>
                )}
            </ul>
        </div>
    );
};

export default RestaurantMenu;