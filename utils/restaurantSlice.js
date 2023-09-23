import { createSlice } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    items : [],
  },
  reducers: {
    currentRestaurantInfo: (state, action) => {
      state.items ? ((state .items= []), state.items.push(action.payload)) : state.items.push(action.payload);
    },
  },
});

export const { currentRestaurantInfo } = RestaurantSlice.actions
export default RestaurantSlice.reducer ;
