import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();

  async function getRestaurantMenu() {
    const info = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3108256&lng=78.03444259999999&catalog_qa=undefined&submitAction=ENTER&restaurantId=" +
        resid
    );
    const data = await info.json();
    console.log(data?.data?.cards[0].card?.card?.info);
    setRestaurantInfo(data?.data?.cards[0].card?.card?.info);
  }

  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    getRestaurantMenu();
  }, []);

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Menu : {resid} </h1>
      <h1>{restaurantInfo?.name}</h1>
      <img src={IMG_CDN_URL + restaurantInfo?.cloudinaryImageId} />
      <h3>{"average rating : " + restaurantInfo?.avgRating + " stars"}</h3>
      <h3>{"cost  : " + restaurantInfo?.costForTwoMessage}</h3>
    </div>
  );
};
export default RestaurantMenu;
