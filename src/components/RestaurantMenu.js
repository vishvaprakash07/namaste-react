import { useState, useEffect, use } from 'react';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constants';

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();
    

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log("Menu Data",json);
        setResInfo(json);
    };

    if(resInfo===null) {
        return <Shimmer />;
    }

    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;

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