
const ShimmerCard =  () => {
    return (
            <div className="w-72 h-80 rounded-lg shadow-xl">
                <div className="w-72 h-44 my-2 rounded-t-lg bg-gray-200 animate-pulse ">
                </div>
                <div className="shimmer-restaurant-info">
                    <p className="h-5 w-64 bg-gray-200 rounded-md ml-2 my-3 animate-pulse"></p>
                    <p className="h-3 w-60 bg-gray-200 rounded-md ml-2 my-3 animate-pulse"></p>
                    <p className="h-3 w-60 bg-gray-200 rounded-md ml-2 my-3 animate-pulse"></p>
                    <p className="h-3 w-60 bg-gray-200 rounded-md ml-2 my-3 animate-pulse"></p>
                </div>
            </div>
    )
};

export const RestaurantListShimmer = () => {
    return (
        <div className="shimmer-body">
            <div className="flex flex-wrap px-24 gap-14"> 
                {Array(8).fill(' ').map((_,index) => {
                  return <ShimmerCard key={index} />
                })}
            </div>
        </div>
    )
}

