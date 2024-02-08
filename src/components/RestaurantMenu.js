import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const restaurant = useRestaurant(resid);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <h1>Restaurant Menu : {resid} </h1>
      <h1>{restaurant?.name}</h1>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <h3>{"average rating : " + restaurant?.avgRating + " stars"}</h3>
      <h3>{"cost  : " + restaurant?.costForTwoMessage}</h3>
    </div>
  );
};
export default RestaurantMenu;
