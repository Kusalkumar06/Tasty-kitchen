import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <div className=" h-[89vh] flex items-center justify-center">
        <div className="text-center h-[60%] px-[40px] md:px-0 md:w-[30%] flex flex-col justify-between">
          <div className="flex justify-center">
            <img src="https://res.cloudinary.com/dtrouncfb/image/upload/v1754289363/Layer_2_kmaxkd.png" />
          </div>
          <p className="text-[24px] text-[#1E293B] ">Page Not Found</p>
          <div>
            <p className="text-[16px] text-[#64748B]">We are sorry, the page you requested could not be found. Please go back to the homepage</p>
          </div>
          <div>
            <Link to="/">
              <button className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer">Home Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound
