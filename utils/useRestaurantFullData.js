import { useState, useEffect } from "react";
//constants
import { URL_RESTAURANT_INFO } from "../src/assets/constants";

const useRestaurantFullData = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState([]);
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restaurantDiscount, setRestaurantDiscount] = useState([]);

  useEffect(() => {
    getRestaurantFullData();
  }, []);

  async function getRestaurantFullData() {
    try {
      const data = await fetch(URL_RESTAURANT_INFO + resId);
      const json = await data.json();
      console.log(json)
      setRestaurantInfo(json.data?.cards[2]?.card?.card?.info);
      setRestaurantMenu(Object.values(json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards))
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
    }
  }

  return [restaurantInfo , restaurantMenu ]
};

export default useRestaurantFullData;
