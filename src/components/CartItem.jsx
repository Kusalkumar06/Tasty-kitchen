import React from 'react'
import { useDispatch } from 'react-redux';
import slice from '../redux/slices';


const actions = slice.actions

function CartItem(props) {
    const {details} = props
    const {name,image_url,id,quantity,cost} = details;
    const dispatch = useDispatch()
    const count = quantity


  return (
    <div>
      <div className="For-Desktop-view p-3 hidden md:flex items-center justify-between">
        <div className="flex items-center w-[30%] justify-between">
          <img className="w-[136px] h-[100px] rounded-lg" src={image_url} />
          <p className="text-[20px] text-[#183B56] font-[Roboto]">{name}</p>
        </div>
        <div className="flex w-[30%] justify-center">
          <div className="flex items-center justify-around">
            <button onClick={() => { dispatch(actions.removeFromCart(id)); }} className="border-1 rounded-sm px-2 cursor-pointer">-</button>
            <p className="mx-3">{count}</p>
            <button onClick={() => { dispatch(actions.addToCart({ name, id, image_url, cost })); }} className="border-1 rounded-sm px-2 cursor-pointer">+</button>
          </div>
        </div>
        <div className="w-[30%] flex items-center justify-evenly text-[#FFA412] text-[16px]">
          <p>₹ {cost * count}</p>
          <div className="Cancel-icon cursor-pointer" onClick={() => dispatch(actions.removeInCart(id))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
      </div>
  
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
            <p className="">₹ {cost * count}</p>
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
