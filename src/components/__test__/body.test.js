import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";

import RestaurantInfo from '../restaurantInfo'
import DishCard from '../dishCard'
import Header from "../header";
import store from "../../../utils/store";
import { restaurantInfo } from "../../assets/constants";

global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json: () => {
           return Promise.resolve(restaurantInfo)
        }
    })
})

test("onClick the dish card add item button the cart items values should change in header component " , () => {
    const header = render(
        <StaticRouter>
            <Provider store={store} >
                <Header />
            </Provider>
        </StaticRouter>
    )  
    const restaurantInfo = render(
        <StaticRouter>
            <Provider store={store} >
                <DishCard />
                <RestaurantInfo />
            </Provider>
        </StaticRouter>
    )

   
    
    const addButton = restaurantInfo.getByTestId('add-btn');
    fireEvent.click(addButton);
    const cartItems = header.getByTestId('cartItems')
    expect(cartItems.innerHTML).toBe('1')

})

test("onClick the category button in restaurantInfo page the dishCards should load" , async() => {
    const restaurantInfo = render(
        <StaticRouter>
            <Provider store={store} >
                <RestaurantInfo />
            </Provider>
        </StaticRouter>
    )


    await waitFor(() => expect(restaurantInfo.getByTestId('categoryContainer')))
    
    const categoryContainer = restaurantInfo.getByTestId('categoryContainer');
    expect(categoryContainer.children.length).toBe(16)

    const dishCardContainer = restaurantInfo.getByTestId('dishCardContainer')
    fireEvent.click(categoryContainer.children[0])
    expect(dishCardContainer.children.length).toBe(39)
 

})