import { URL_IMG } from "../assets/constants";
import { addItems , removeItems , clearCart} from '../../utils/cartSlice';

import { useDispatch ,useSelector } from "react-redux";

const DishCard = ({
    name,
    price,
    ratings,
    isVeg,
    imageId,
    description
}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(store => store.cart.items) 

    const handleAddItem = () => {
        dispatch(addItems(name))
    }
    const handleRemoveItem = () => {
        dispatch(removeItems())
    }
    return (
        <div className=" h-32 w-[650px] p-2 my-2 mx-auto flex shadow-sm bg-slate-50  cursor-pointer overflow-hidden " >
            <div className="w-3/4 my-auto ">
                {isVeg ? <div className="px-3 mb-1  text-xs font-bold text-green-500" >Veg</div> : <div className="px-3  mb-1   text-xs  font-bold text-red-500" >Non-Veg</div> }
                <div className="text-sm px-3 mb-1  text-black font-semibold " >{name}</div>
                <div className="text-sm px-3  mb-1 ">Rs-{price/100}</div>
                <div className="text-xs px-3 text-slate-500  italic">{description}</div>
            </div>
            <div className="w-[160px] my-auto relative  h-full flex-col rounded-md">
            {imageId ? <img src={URL_IMG + imageId} alt="dish-img"  className="w-full  h-full rounded-md"/> :  <div className="w-full h-full bg-slate-200 rounded-md"></div> }
            <div className="shadow-md px-3 bg-white absolute right-4 -bottom-1.5 flex justify-between  rounded-md hover:bg-green-200 py-1 w-32"> <button  onClick={ () => handleRemoveItem()}>-</button> item <button data-testid='add-btn' onClick={ () => handleAddItem(name)}>+</button></div>
            </div>
        </div>
    )
};
export default DishCard