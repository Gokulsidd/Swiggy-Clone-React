import { useState, useEffect , useRef } from "react";
//customHooks
import useRestaurants from "../../utils/useRestaurants";
//utils
import { filterRestaurants } from "../../utils/helper";
//components
import RestaurantList from "./restaurantList";
import FilteredRestaurantList from "./filteredRestaurantList";


const Body = () => {
  console.log('start')
  const inputRef = useRef(null);
  const [searchText, setSearchText] = useState('');
  
  const [[filteredRestaurantData , setFilteredRestaurantData], [allRestaurants]] = useRestaurants()
  console.log(filteredRestaurantData)
  
  console.log('body')
  return (
    <div className="min-h-screen">
      <div className="py-5 mb-7 flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = filterRestaurants(inputRef.current.value, allRestaurants);
            setFilteredRestaurantData(data);
          }}
        >
          <input
            type="text"
            placeholder={"search for restaurants"}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pr-36 pl-4 py-2 rounded-md  focus:outline-none shadow-md border-solid border-2 border-gray-100 "
            ref={inputRef} 
          />
          <button
            type="submit"
            className="bg-orange-400 px-5 py-2 ml-2 text-cyan-50 rounded-md hover:bg-orange-500"
            onClick={() => {const data = filterRestaurants(inputRef.current.value, allRestaurants);
              setFilteredRestaurantData(data);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                const data = filterRestaurants(searchText, allRestaurants);
                setFilteredRestaurantData(data);
              }
            }}
          >
          search
          </button>
          <button className="bg-orange-400 px-5 py-2 ml-2 text-cyan-50 rounded-md  hover:bg-orange-500"  onClick={() => {setSearchText(""); setFilteredRestaurantData(allRestaurants)}} >Back</button>
        </form>
      </div>
      {console.log('jsx' ,  filteredRestaurantData)}
      {filteredRestaurantData?.length < allRestaurants?.length ? (
        <FilteredRestaurantList filteredData={filteredRestaurantData}/>
      ) :<RestaurantList allData={allRestaurants} />} 
    </div>
  );
};

export default Body;


