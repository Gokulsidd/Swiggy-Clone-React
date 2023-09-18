import { useParams } from "react-router-dom";
import { useState } from "react";
//constants
import { URL_IMG } from "../assets/constants";
import star from "../assets/img/rating.png";

//customHooks
import useRestaurantFullData from "../../utils/useRestaurantFullData";
import useOnlineStatus from "../../utils/useOnlineStatus";
//components
import { RestaurantListShimmer } from "./shimmers/restaurantListShimmer";
import DishCard from "./dishCard";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const isOnline = useOnlineStatus();
  const [restaurantInfo , restaurantMenu] = useRestaurantFullData(resId);
  
  console.log(restaurantInfo)
  const menuTitle = restaurantMenu?.map((restaurant) => restaurant?.card?.card?.title)
  const recommendedItems = restaurantMenu[1]?.card?.card?.itemCards?.map((item) =>item.card.info)
  const [items , setItems] = useState([recommendedItems])

  console.log('1st')
  const getCategoryItems = (title , restaurantMenu) => {
    const itemData  = restaurantMenu.map((menu) => {
      if(menu?.card?.card?.title){
        if(menu?.card?.card?.title === title){
          return menu?.card?.card?.itemCards?.map((item) =>item.card.info)
        }else{
          return null
        }
      }else{
        return null
      }
    })
    console.log('2st' , itemData)
    setItems(itemData)
  }

  if(!isOnline){
    return <div className="restaurant-info-container">Oops !! Your are not Online </div>
  }

  return (restaurantMenu.length === 0) ? <RestaurantListShimmer /> : (
    <div className="min-h-screen flex  ">
      <div className="flex-1 max-w-6xl  mx-auto p-4">
        <div className="grid grid-rows-2 grid-flow-col bg-slate-50 " >
          <div className="h-[300px] md:w-[300px] lg:w-[400px] p-2 m-2 ">
            <div className="grid grid-flow-row grid-cols-2 h-full">
              <div className="col-span-1 lg:h-[180px] md:h-[150px] p-1.5"><img className="object-cover w-full h-full " src={URL_IMG + restaurantInfo?.cloudinaryImageId} alt="restaurant-img" /></div>
              <div className="col-span-1 row-span-2 p-2">
                <ul>
                  <li className="flex justify-between gap-2 mb-4">
                    <div className="flex">
                      <img src={star} className="w-6" alt="star" />
                      <p>{restaurantInfo.avgRatingString}</p>
                    </div>
                      <p>{restaurantInfo.totalRatingsString}</p>
                    </li>
                  <li className="text-slate-600 px-1  italic text-sm">{restaurantInfo.costForTwoMessage}</li>
                  <li className="text-slate-600 px-1  italic text-sm">{restaurantInfo.cuisines.join(',')}</li>
                </ul>
              </div>
              <div className="col-span-2 row-span-6 p-2.5">
                <ul>
                  <li className="font-semibold text-xl" >{restaurantInfo.name}</li>
                  <li className="text-slate-600  italic text-sm" >{restaurantInfo.locality}</li>
                  <li className="text-slate-600  italic text-sm" >{restaurantInfo.city}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="h-[300px] md:w-[300px] lg:w-[400px]  p-2 m-2 overflow-y-scroll bg-slate-50" >
            <ul className="">{menuTitle?.map((title) => title === undefined ? null : <li className="max-w-lg bg-slate-50 my-1 p-1 text-center cursor-pointer hover:bg-slate-200 rounded-sm" onClick={() => { getCategoryItems(title , restaurantMenu)}} >{title}</li> )}</ul>
          </div>
          <div className="h-[620px]  py-2 m-2 col-span-2 row-span-2 overflow-y-scroll bg-slate-50">
            {items.length <= 1 ? recommendedItems.map((i) =><DishCard key={i.id} {...i} /> ) : items.map((item) =>  item ? item.map((i) =><DishCard key={i.id} {...i} />) : null) }
          </div>
        </div>
      </div>
    </div>
  );


};

export default RestaurantInfo;
