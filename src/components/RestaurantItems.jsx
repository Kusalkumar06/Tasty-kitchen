import React from 'react'
import { Link } from 'react-router-dom';

import EachRestaurantItem from './EachRestaurantItem';

function RestaurantItems(props) {
  const {details} = props;
  const { image_url, name, cuisine, user_rating,id } = details;
  const {rating,total_reviews} = user_rating;

  return (
    <div className="w-full md:w-[30%] mb-[35px] shadow-lg p-[10px] rounded-lg cursor-pointer">
      <Link to={`/restaurants/${id}`}>
        <div className=" flex">
          <div className="Image-container">
            <img
              className="w-[160px] h-[100px] md:w-[255px] md:h-[150px] rounded-lg"
              src={image_url}
            />
          </div>
          <div className="details-container pl-3 flex flex-col justify-around w-[70%]">
            <h1 className="text-[16px] md:text-[18px] text-[#334155] font-[600]">
              {name}
            </h1>
            <p className="text-[12px] md:text-[14px] text-[#64748B] font-[400]">
              {cuisine}
            </p>
            <div className="rating-container flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-3 mr-2"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-[14px] mr-1 text-[#0F172A] font-[600]">
                {rating}
              </p>
              <p className="text-[12px] text-[#64748B] font-[400]">{`(${total_reviews} ratings)`}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RestaurantItems
