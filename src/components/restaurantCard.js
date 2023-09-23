import { useDispatch } from "react-redux";

//img
import star from "../assets/img/rating.png";
//constants
import { URL_IMG } from "../assets/constants";
import { currentRestaurantInfo } from '../../utils/restaurantSlice'

const RestaurantCard = ({
    name,
    avgRating,
    cuisines,
    areaName,
    cloudinaryImageId,
    fullData
  }) => {
    const dispatch = useDispatch();
    const getCurrentRestaurantInfo = () => {
      dispatch(currentRestaurantInfo(fullData))
    }
    return (
      <div className="w-72 md:w-full lg:w-full   hover:scale-95 transition duration-100 rounded-xl" onClick={() => getCurrentRestaurantInfo()} >
        <img
          src={URL_IMG + cloudinaryImageId}
          className="w-full h-44 rounded-xl shadow-xl object-cover"
          alt="restaurant-image"
        />
        <div className="p-2">
          <p className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">
            {name}
          </p>
          <p className="flex items-center gap-2">
            <span className="rating-star">
              <img src={star} className="w-6" alt="star" />
            </span>
            {avgRating}
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap">
            {cuisines?.join(",")}
          </p>
          <p className="area-name">{areaName}</p>
        </div>
      </div>
    );
  };
  

export default RestaurantCard;
