import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';
function EmptyCart() {
  return (
    <div>
      <Header />
      <div className="h-[89vh] flex items-center justify-center">
        <div className="text-center w-[80%] md:w-[25%] h-[60%] flex flex-col justify-between">
          <div className="flex justify-center">
            <img src="https://res.cloudinary.com/dtrouncfb/image/upload/v1754289316/cooking_1_1_wqjblq.png" />
          </div>
          <p className="text-[24px] text-[#1E293B] ">No Orders Yet!</p>
          <div>
            <p className="text-[16px] text-[#64748B]">Your cart is empty.Add something from the menu.</p>
          </div>
          <div>
            <Link to="/">
              <button className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmptyCart
