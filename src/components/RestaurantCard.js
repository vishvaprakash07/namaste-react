import { CDN_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);
    const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } = resData?.info;
    return (
        <div data-testid="resCard" className="m-4 p-4 w-[225px] h-[475px] rounded-md bg-gray-100  hover:bg-gray-300" >
            <img className="rounded-xl" alt="res-logo" 
                            src={
                                CDN_URL +
                                cloudinaryImageId
                            }
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>▪️{cuisines.join(', ')}</h4>
            <h4>▪️{costForTwo}</h4>
            <h4>▪️{avgRating} stars</h4>
            <h4>▪️{sla.deliveryTime} minutes</h4>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;