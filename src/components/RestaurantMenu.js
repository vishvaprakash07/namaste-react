import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';


const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    
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