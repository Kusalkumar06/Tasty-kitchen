import React from 'react'
import { useDispatch } from 'react-redux';
import slice from '../redux/slices';
import { MdCancel } from "react-icons/md";
import { FaCirclePlus,FaCircleMinus } from "react-icons/fa6";



const actions = slice.actions

function CartItem(props) {
    const {details} = props
    const {name,image_url,id,quantity,cost,restaurant_name} = details;
    const dispatch = useDispatch()
    const count = quantity

  return (
    <div>
      <div className="For-Desktop-view p-3 hidden md:flex items-center justify-between">
        <div className="flex w-[33%]">
          <img className="w-32 md:mr-[20px] h-32 rounded-lg" src={image_url} />
          <div className='flex flex-col justify-around'>
            <h1 className='text-[17px] font-[600]'>{name}</h1>
            <p className='text-[15px] text-gray-600'>{restaurant_name}</p>
            <p className='text-orange-500 font-bold'>₹{cost}</p>
          </div>
        </div>
        <div className="flex w-[30%] justify-center w-[33%]">
          <div className="flex items-center justify-around">
            <button onClick={() => { dispatch(actions.removeFromCart(id)); }} className="rounded-sm pr-2 cursor-pointer"><FaCircleMinus size="25px" color='#f97316ff'/></button>
            <p className="mx-3 text-[20px]">{count}</p>
            <button onClick={() => { dispatch(actions.addToCart({ name, id, image_url, cost })); }} className="rounded-sm pl-2 cursor-pointer"><FaCirclePlus size="25px" color='#f97316'/></button>
          </div>
        </div>
        <div className="w-[33%] flex items-center justify-evenly text-[#FFA412] text-[16px]">
          <p className='text-[20px]'>₹ {cost * count}</p>
          <div className="Cancel-icon cursor-pointer" onClick={() => dispatch(actions.removeInCart(id))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>

      {/* <div className='For-Desktop-view p-3 hidden md:flex justify-between bg-white m-3 rounded-lg'>
         <div className='flex w-[270px] justify-between'>
           <div className='image-container'>
              <img className='w-24 h-24 rounded-lg' src={image_url}/>
           </div>
           <div className='flex flex-col justify-between'>
              <h1 className='text-[17px] font-[600]'>{name}</h1>
              <p className='text-[15px] text-gray-600'>{restaurant_name}</p>
              <p className='text-orange-500 font-bold'>₹{cost}</p>
           </div>
         </div>
          <div className='flex flex-col justify-between'>
              <div className="flex items-center justify-around">
                <button onClick={() => { dispatch(actions.removeFromCart(id)); }} className="pr-1 cursor-pointer"><FaCircleMinus size="20px" color='#f97316'/></button>
                <p className="mx-3">{count}</p>
                <button onClick={() => { dispatch(actions.addToCart({ name, id, image_url, cost })); }} className="pl-1 cursor-pointer"><FaCirclePlus size="20px" color='#f97316'/></button>
              </div>
              <p className='self-end text-[18px] font-[500]'>₹ {cost * count}</p>
              <div className="Cancel-icon cursor-pointer self-end bg-red-500 px-2 py-[2px] rounded-[10px]" onClick={() => dispatch(actions.removeInCart(id))}>
                    <p className='font-[500] text-white'>Remove</p>
              </div>
         </div>
      </div> */}
  
      <div className="For-mobile-view p-3 flex block md:hidden">
        <div>
          <img className="w-[136px] h-[90px] mr-[30px] rounded-lg" src={image_url} />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-[20px] text-[#183B56] font-[Roboto]">{name}</p>
          <div className="flex">
            <div className="flex items-center justify-around">
              <button onClick={() => { dispatch(actions.removeFromCart(id)); }} className="border-1 rounded-sm px-2 cursor-pointer">-</button>
              <p className="mx-3">{count}</p>
              <button onClick={() => { dispatch(actions.addToCart({ name, id, image_url, cost })); }} className="border-1 rounded-sm px-2 cursor-pointer" >+</button>
            </div>
          </div>
          <div className="flex items-center justify-between text-[#FFA412] text-[16px] w-[80px]">
            <p className="">₹{cost * count}</p>
            <div className="Cancel-icon" onClick={() => dispatch(actions.removeFromCart(id))}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem
