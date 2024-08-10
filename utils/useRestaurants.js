import { useState , useEffect } from "react"

const useRestaurants = () => {
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([]);
    const [allRestaurants, setAllRestaurants] = useState([]);
    

    useEffect(() => {
      console.log('effect')
        getRestaurantData();
      }, []);

    async function getRestaurantData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.1085242&lng=77.3410656&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
  
        console.log('async')
        setAllRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
      } 
    console.log('effect2')
    return [[filteredRestaurantData, setFilteredRestaurantData] ,[allRestaurants, setAllRestaurants]]
}


export default useRestaurants

