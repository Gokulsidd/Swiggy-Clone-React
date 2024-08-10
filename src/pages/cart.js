import { useSelector } from "react-redux";
import { URL_IMG } from "../assets/constants";
import { useState } from "react";
import { calculateItemsQuantity, calculateQuantity } from "../../utils/helper";

const Cart = () => {
  const cartData = useSelector((store) => store.cart.items);
  const currentRestaurantInfo = useSelector((store) => store.restaurant.items);
  const cartItems = calculateItemsQuantity(cartData)
  console.log(cartItems, 'll')
  const totalAmount = cartItems ? cartItems?.map((item) => item.price / 100)?.reduce((acc, amount) => acc + amount) : null;



  

  return (
    <div className="min-h-screen">
      <div className="flex-1 max-w-6xl  mx-auto p-4">
        {/* billing container */}
        <div className="min-h-[570px] w-[550px] mx-auto px-14 py-10 flex flex-col items-start space-y-6 bg-white  shadow-md">
          <div className="flex justify-start space-x-6">
            <img
              className="h-14 w-14 text-xs bg-slate-300 rounded-sm"
              src={URL_IMG + currentRestaurantInfo[0]?.info?.cloudinaryImageId}
              bg-slate-100
              alt="restaurant-img"
            />
            <div className="overflow-hidden text-ellipsis whitespace-nowrap">
              <p className="text-2xl font-medium">
                {currentRestaurantInfo[0]?.info?.name}
              </p>
              <p className="text-sm italic">
                {currentRestaurantInfo[0]?.info?.locality}
              </p>
            </div>
          </div>
          <ul className="w-full space-y-4 flex-1">
            {cartItems.map((item) => {
              return (
                <li className="w-full p-4 my-2 flex space-x-4 border border-1 border-gray-200 rounded-md ">
                  <p>
                    <img
                      className="w-12 h-12 text-xs bg-slate-300 rounded-sm mx-auto "
                      src={URL_IMG + item.imageId}
                      bg-slate-100
                      alt={item.name}
                    />
                  </p>
                  <div>
                      <li>{item.name}</li>
                      <div className="space-x-4 flex">
                      <li>
                        <span className="text-red-400 font-semibold">Rs </span>
                        <span className="font-bold">{item.price / 100}</span>
                      </li>
                        <span className="text-green-400 font-semibold">Quantity :</span>
                        <span className="">{item.quantity}</span>
                      </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="h-20 py-4 text-lg font-semibold  flex w-full justify-between items-center">
            <p>To Pay</p>
            <p>Rs {totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
