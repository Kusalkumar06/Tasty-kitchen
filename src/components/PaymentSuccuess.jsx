import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom';

function PaymentSuccuess() {
  return (
    <div>
      <Header />
      <div className=" h-[89vh] flex items-center justify-center">
        <div className="text-center h-[46%] flex flex-col justify-between">
          <div className="flex justify-center">
            <img src="https://res.cloudinary.com/dtrouncfb/image/upload/v1754250727/check-circle.1_1_ub9q7y.png" />
          </div>
          <p className="text-[24px] text-[#1E293B] ">Payment Successful</p>
          <div>
            <p className="text-[16px] text-[#64748B]">Thank you for ordering</p>
            <p className="text-[16px] text-[#64748B]">Your payment is successfully completed.</p>
          </div>
          <div>
            <Link to="/">
              <button className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer">Go to Home Page</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentSuccuess
