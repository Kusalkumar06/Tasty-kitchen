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
    pageNum:1,
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
    setPageNum:(state,data) =>{
      state.pageNum = data.payload;
    },

  },
});

export default slice