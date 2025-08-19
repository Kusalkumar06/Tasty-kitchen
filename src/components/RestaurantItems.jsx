import React from 'react'
import { Link } from 'react-router-dom';

function RestaurantItems(props) {
  const {details} = props;
  const { image_url, name, cuisine, user_rating,id } = details;
  const {rating,total_reviews} = user_rating;

  return (
    <div className="w-full md:w-[30%] mb-[35px] shadow-lg p-[10px] rounded-lg cursor-pointer transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <Link to={`/restaurants/${id}`}>
        <div className=" flex">
          <div className="Image-container">
            <img className="w-[160px] h-[100px] md:w-[255px] md:h-[150px] rounded-lg" src={image_url} />
          </div>
          <div className="details-container pl-3 flex flex-col justify-around w-[70%]">
            <h1 className="text-[16px] md:text-[18px] text-[#334155] font-[600]">{name}</h1>
            <p className="text-[12px] md:text-[14px] text-[#64748B] font-[400]">{cuisine}</p>
            <div className="rating-container flex items-center">
              <p className="text-[14px] mr-1 text-[#0F172A] font-[600]">⭐ {rating}</p>
              <p className="text-[12px] text-[#64748B] font-[400]">{`(${total_reviews} ratings)`}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RestaurantItems
