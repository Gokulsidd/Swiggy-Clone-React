import { Link } from 'react-router-dom';
//components
import RestaurantCard from "./restaurantCard";


const FilteredRestaurantList = ({filteredData}) => {
    return filteredData.length === 0 ? <div>Not found</div> : (
        <div className="flex flex-wrap px-24 gap-14">
        {filteredData?.map((restaurant) => {
            return (
              <Link to={'/restaurant/' + restaurant?.info?.id } key={restaurant?.info?.id} ><RestaurantCard {...restaurant?.info}  fullData={restaurant} /></Link>
            );
          })
        }
      </div>
    )
}

export default FilteredRestaurantList