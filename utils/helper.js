export const filterRestaurants = (searchText, restaurants) => {
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
      return filterData
}

export const calculateItemsQuantity = (cartItems) => {
  const quantities = {};

  cartItems.forEach(item => {
    if(quantities[item.id]){
      quantities[item.id].quantity += 1
    }else{
      quantities[item.id] = {
        ...item,
        quantity: 1
    }
    }
  })
  return Object.values(quantities)
}
