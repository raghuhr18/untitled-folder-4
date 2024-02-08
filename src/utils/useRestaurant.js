import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resid) => {
    const [restaurant, setRestaurant]  = useState(null);

    useEffect(() => {
        getRestaurantMenu();
      }, []);
    
    async function getRestaurantMenu() {
        const info = await fetch(
          FETCH_MENU_URL +
            resid
        );
        const data = await info.json();
        console.log(data?.data?.cards[0].card?.card?.info);
        setRestaurant(data?.data?.cards[0].card?.card?.info);
      }
      return restaurant;
}
export default useRestaurant;