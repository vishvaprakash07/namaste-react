import { useState, useEffect } from 'react';
import { MENU_API } from '../utils/constants';

const useRestaurantMenu = (resId) => {

    const [resInfo, setResinfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu= async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);
        setResinfo(json);
    };

    return resInfo;
};

export default useRestaurantMenu;