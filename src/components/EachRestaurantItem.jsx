import React, { useEffect } from 'react'
import Cookies from 'js-cookie';
import Header from './Header'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import slice from '../redux/slices';
import FoodItem from './FoodItem';
import Footer from './Footer';
import Loader from './Loader';

const actions = slice.actions

function EachRestaurantItem() {
  const token = Cookies.get('jwt_token')
  const {id} = useParams()
  const dispatch = useDispatch()

  const {restaurantDetails,foodList} = useSelector((store) => {
    return store.sliceState
  })

  const setDetails = (data) => {
    dispatch(actions.setRestaurantDetails(data));
    dispatch(actions.setFoodList(data.food_items));
  }

  const fetchEachRestaurantDetails = () => {
    const fn = async () => {
      const url = `https://apis.ccbp.in/restaurants-list/${id}`;
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await fetch(url,options);
      const details = await response.json();
      setDetails(details)
    };
    fn();
  };

  useEffect(fetchEachRestaurantDetails,[id]);

  return (
    <div>
      <Header />
      <div className="my-3 md:my-[30px] h-[188px] md:h-[387px] mb-[20px] md:py-[50px] md:px-[150px] flex items-center bg-[url('https://res.cloudinary.com/dtrouncfb/image/upload/v1754163443/Rectangle_1399_sqomw9.png')]">
        <div className="for-desktop-container  hidden md:flex items-center">
          <div className='Image-container'>
            <img className="hidden md:block w-[405px] h-[240px] rounded-lg" src={restaurantDetails.image_url} />
          </div>
          <div className="Details-container h-[240px] px-[25px] py-[10px] flex flex-col justify-between">
            <h1 className="text-[36px] text-[#FFFFFF] font-[500]"> {restaurantDetails.name} </h1>
            <p className="text-[16px] text-[#FFFFFF] font-[400]"> {restaurantDetails.cuisine} </p>
            <p className="text-[16px] text-[#FFFFFF] font-[400]"> {restaurantDetails.location} </p>
            <div className="flex items-center h-[60px]">
              <div className="flex flex-col justify-around">
                <p className="text-[14px]">⭐{" "}<span className="text-[14px] font-[600] text-[#FFFFFF]">{restaurantDetails.rating}</span></p>
                <p className="text-[12px] text-white">{restaurantDetails.reviews_count}+ Ratings</p>
              </div>

              <div className="w-px h-10 bg-white mx-4"></div>

              <div className="flex flex-col justify-around">
                <p className="text-[14px] font-[600] text-[#FFFFFF]">₹ {restaurantDetails.cost_for_two}</p>
                <p className="text-[12px] text-white">Cost for two</p>
              </div>
            </div>
          </div>
        </div>


        <div className="for-mobile-view block md:hidden flex items-center justify-center">
          <div className="image-container p-2">
            <img className="w-[150px] h-[150px] rounded-full" src={restaurantDetails.image_url} />
          </div>
          <div className="Details-container w-[57%] flex flex-col justify-evenly">
            <h1 className="text-[16px] text-[#FFFFFF] font-[500]">{restaurantDetails.name}</h1>
            <p className="text-[12px] text-[#FFFFFF] font-[400]">{restaurantDetails.cuisine}</p>
            <p className="text-[12px] text-[#FFFFFF] font-[400]">{restaurantDetails.location}</p>
            <div className="flex items-center h-[60px]">
              <div className="flex flex-col justify-around">
                <p className="text-[12px]">⭐{" "}<span className="text-[12px] font-[600] text-[#FFFFFF]">{restaurantDetails.rating}</span></p>
                <p className="text-[12px] text-white">{restaurantDetails.reviews_count}+ Ratings</p>
              </div>

              <div className="w-px h-10 bg-white mx-4"></div>

              <div className="flex flex-col justify-around">
                <p className="text-[12px] font-[600] text-[#FFFFFF]">₹ {restaurantDetails.cost_for_two}</p>
                <p className="text-[12px] text-white">Cost for two</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {foodList.length > 0 ? (
        <div className="md:px-[100px] lg:px-[120px] flex flex-wrap md:justify-around justify-center mb-3">
          {foodList.map((food) => (
            <FoodItem food={food} key={food.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}

      <Footer />
    </div>
  );
}

export default EachRestaurantItem
