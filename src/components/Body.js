import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "../RestaurantCard";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <>
      <div className="seach-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant?.info} key={restaurant?.info?.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
