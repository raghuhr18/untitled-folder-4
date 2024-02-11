import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";



const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2965552&lng=77.99659609999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if(!isOnline) {
    return(<h1>Oh No.. seems like You're Offline</h1>)
  }

  if (!allRestaurants) return null;
  // if (filteredRestaurants?.length === 0)
  //   return <h1>No Matching Restaurants Found</h1>;
  return filteredRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-gray-200 p-5 flex justify-center">
        <input
          type="text"
          className="p-2 m-2 rounded-md"
          placeholder="Search for Restaurant"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="p-2 m-2 bg-gray-400 rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
