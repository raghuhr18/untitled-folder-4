import { useContext } from "react";
import userContext from "../utils/UserContext";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRatingString,
}) => {
  const { user } = useContext(userContext)

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addItem("orange"));
  }
  return (
    <div className="w-60 shadow-md p-2 m-2 border border-l h-80 bg-pink-100">
      <img className="h-48 object-fill w-full"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRatingString} stars</h4>
      <h4>{ user.name } - {user.email}</h4>
      <button className="bg-lime-400 p-2" onClick={() => handleClick()}>Add Item</button>
    </div>
  );
};
export default RestaurantCard;
