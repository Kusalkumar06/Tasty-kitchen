import React from 'react'
import Header from './Header'
import Cookies from 'js-cookie'
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Carousel from './Carousel'
import Restaurants from './Restaurants';
import Footer from './Footer';
import { useSelector,useDispatch } from 'react-redux';
import slice from '../redux/slices';

const actions = slice.actions

function Home() {
   const dispatch = useDispatch()

  const { carouselList, restaurantList, pageNum,activeOptionId } = useSelector((store) => {
    return store.sliceState;
  });

  const setCarouselList = (data) => {
    dispatch(actions.setCarouselList(data));
  } 

  const setTotalPages = (data) => {
    dispatch(actions.setTotalPage(parseInt(data/9)+1))
  }

  const setRestaurantList = (data) => {
    dispatch(actions.setRestaurantList(data));
  };

  const token = Cookies.get("jwt_token");
  const offset = (pageNum - 1) * 9;

  const fetchCarouselImages = () => {
    const fn = async () => {
      const url = "https://apis.ccbp.in/restaurants-list/offers";
      const options = {
        method: "GET",
        headers:{
          Authorization : `Bearer ${token}`
        }
      }
      const response = await fetch(url, options);
      const carouselImages = await response.json();
      setCarouselList(carouselImages.offers);
    };
    fn();
  }

  const fetchRestaurants = () => {
    const fn = async () => {
      const url = `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${9}&sort_by_rating=${activeOptionId}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url, options);
      const responseList = await response.json();
      setRestaurantList(responseList.restaurants);
      setTotalPages(responseList.total)
    };
    fn();
  };

  useEffect(fetchCarouselImages,[]);

  useEffect(fetchRestaurants,[pageNum,activeOptionId])
  

    if (token === undefined) {
      return <Navigate to="/login"/>;
    }

  return (
    <div>
      <div className='mb-[65px] md:mb-[75px]'>
        <Header />
      </div>
      <div className="p-2 md:px-[50px] mt-0 md:mt-[30px]">
        <div className="mb-[40px] md:mb-[70px]">
          <Carousel carouselList={carouselList} />
        </div>
        <div>
          <Restaurants restaurantList={restaurantList} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home
