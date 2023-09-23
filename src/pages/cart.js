import {  useSelector } from "react-redux";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items)
    const totalAmount = cartItems ? cartItems.map((item) => item.price / 100 ).reduce((acc,amount) => acc + amount ) : null

    const currentRestaurantInfo = useSelector(store => store.restaurant.items)
    console.log(currentRestaurantInfo)

    return (
        <div className="min-h-screen">
            <div className="flex-1 max-w-6xl  mx-auto p-4 bg-slate-100 ">
                {/* billing container */}
                <div className="min-h-[570px] max-w-sm   mx-auto relative bg-white  shadow-md">
                    <div className="header py-4 px-7  flex header" >
                        <div className="w-1/4  " >
                        <img className="w-14 h-14 text-xs bg-slate-300  mx-auto " src={currentRestaurantInfo?.info?.cloudinaryImageId} bg-slate-100  alt="restaurant-img" />
                        </div>
                        <div className="w-3/4 overflow-hidden text-ellipsis whitespace-nowrap" >
                            <p className="text-2xl font-medium">{currentRestaurantInfo?.info?.name}</p>
                            <p className="text-sm italic">{currentRestaurantInfo?.info?.locality}</p>
                        </div>
                    </div>
                    <div>
                        <ul className="w-3/4 mx-auto">
                            {cartItems.map((item) =>  {
                                return <li className=" mb-2 px-5 flex justify-between  border border-1 border-gray-950 " >
                                    <p><li>{item.name}</li></p>
                                    <p><li>{item.price / 100}</li></p>
                                </li>
                            } )}
                        </ul>
                    </div>
                    <div className="footer h-20 py-4 px-7 text-lg font-semibold absolute bottom-0 flex w-full justify-between items-center">
                        <p>To Pay</p>
                        <p>Rs {totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Cart;