import useRestaurantMenu from '../utils/useRestaurantMenu';
import Shimmer from './Shimmer';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    
    if(resInfo===null) {
        return <Shimmer />;
    }

    const { name, avgRating, costForTwoMessage, cuisines } = resInfo?.data?.cards[2]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card; 
    console.log("Item Cards", itemCards);

    const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log("Categories", categories);

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{ name }</h1>
            <h3 className="font-bold text-lg">Cusinies: { cuisines.join(', ') } - { costForTwoMessage }</h3>
            
                { categories.map((category, index) => (
                    <RestaurantCategory key={category.card.card.categoryId}
                      data={category?.card?.card}
                      showItems={index === showIndex ? true : false}
                      setShowIndex={() => setShowIndex(index)}/>
                 ))
                }
            
        </div>
    );
};

export default RestaurantMenu;