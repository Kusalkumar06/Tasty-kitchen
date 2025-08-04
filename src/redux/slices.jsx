import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "slice",
  initialState: {
    // Login Page
    username: "",
    password: "",
    showErr: false,
    // Header
    isMenuOpen: false,
    // Home
    // Carousel images
    carouselList: [],
    //Restaurants:
    restaurantList: [],
    //PageNUm:
    pageNum: 1,
    // EachRestaurantDetails
    restaurantDetails: [],
    // FoodList
    foodList: [],
    // For quantity
    addToCart: {},
    // Cart Items
    items: [],
    // Sorting
    activeOptionId : "Lowest",
  },
  reducers: {
    // Login Page
    handleUserName: (state, data) => {
      state.username = data.payload;
    },
    handlepassword: (state, data) => {
      state.password = data.payload;
    },
    handleShowErr: (state) => {
      state.showErr = true;
    },
    // Header
    setIsMenuOpen: (state, data) => {
      state.isMenuOpen = data.payload;
    },
    // Home
    // Carousel images:
    setCarouselList: (state, data) => {
      state.carouselList = data.payload;
    },
    //Restaurants:
    setRestaurantList: (state, data) => {
      state.restaurantList = data.payload;
    },
    //PageNum:
    setPageNum: (state, data) => {
      state.pageNum = data.payload;
    },
    //RestaurantDetsils
    setRestaurantDetails: (state, data) => {
      state.restaurantDetails = data.payload;
    },
    // FoodList:
    setFoodList: (state, data) => {
      state.foodList = data.payload;
    },
    // for quantity
    setQuantity: (state, data) => {
      const { food_id, count } = data.payload;
      state.addToCart[food_id] = count;
    },
    // Cart Items
    setCart: (state, data) => {
      state.items = data.payload;
    },
    addToCart: (state, data) => {
      const {id,name,image_url,cost} = data.payload 
      const findExist = state.items.find(each => each.id === id)
      if (findExist) {
        findExist.quantity += 1;
      } else {
        state.items.push({id,quantity : 1,name,image_url,cost})
      }
    },
    removeFromCart: (state, data) => {
      const id  = data.payload;
      const index = state.items.findIndex(each => each.id === id)
      if (index !== -1) {
        if (state.items[index].quantity > 1) 
          state.items[index].quantity -= 1;
        else 
          state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },

    //For Sorting
    setActiveOptionId : (state,data) => {
      state.activeOptionId = data.payload
    }
  },
});

export default slice