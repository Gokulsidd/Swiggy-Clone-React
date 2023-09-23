
import { Link } from 'react-router-dom';
//components
import RestaurantCard from "./restaurantCard";
import { RestaurantListShimmer } from "./shimmers/restaurantListShimmer";


const RestaurantList = ({allData }) => {
    return allData?.length === 0  ? (
    <RestaurantListShimmer />
    ) : (
        <div className="grid  grid-cols-1 gap-10 px-32 mr-100px md:grid-cols-3 lg:grid-cols-4 ">
        {allData?.map((restaurant) => {
            return (
              <Link to={'/restaurant/' + restaurant?.info?.id  } key={restaurant?.info?.id}  ><RestaurantCard {...restaurant?.info} fullData={restaurant} /></Link>
            );
          })
        }
      </div>
    )
}

export default RestaurantList