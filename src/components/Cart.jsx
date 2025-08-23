import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';
import slice from "../redux/slices";
import { IoMdCart } from "react-icons/io";

const actions = slice.actions;

function Cart() {

  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(actions.clearCart());
  };


  const {items} = useSelector((store) => {
    return store.sliceState
  })

  const reducer = (price,item) => price + (item.cost * item.quantity)
  const subTotal = items.reduce(reducer,0)
  const delivaryCharges = subTotal > 500 ? 0 : 60
  let taxes = 0
  if (subTotal > 0 && subTotal <= 400)
    taxes = 45
  else if (subTotal > 400 && subTotal <= 800)
    taxes = 90
  else if (subTotal >800 && subTotal <= 1200)
    taxes = 135
  else 
    taxes = 200

  return (
    items.length > 0 ? 
      <div>
        <div className='mb-[65px] md:mb-[100px]'>
          <Header />
        </div>
        <div className="my-[30px] md:my-[50px] px-[10px] md:px-[60px] p-[10px]">
          {/* heading-container */}
          <div className='flex justify-between mb-3 items-center'>
            <div className='flex items-center'>
              <IoMdCart color='#f97316ff' size="28px"/>
              <h1 className='text-[25px] ml-3 mb-1'>Your Cart</h1>
            </div>
            <button onClick={clearCart} className="p-[5px] mr-[10px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer">
                Clear Cart
            </button>
          </div>
          {/* cart-items-container */}
          <div className="bg-[white] md:bg-[#0B69FF1A] p-[0] md:p-[20px] rounded-lg">
            <div className="hidden md:flex justify-around">
              <p className='w-[33%] text-center'>Item</p>
              <p className='w-[33%] text-center'>Quantity</p>
              <p className='w-[33%] text-center'>Price</p>
            </div>
             <hr className="hidden md:block my-[15px] text-[#CBD2D9]" />
            {/* For-desktop-view */}
            <div className="hidden md:block">
              {items.map((each) => {
                return <CartItem details={each} key={each.id} />;
              })}
            </div>
            {/* For-mobile-view */}
            <div className="block md:hidden">
              <div>
                {items.map((each) => {
                  return <CartItem details={each} key={each.id} />;
                })}
              </div>
            </div>
          </div>
          {/* cart-Summary */}
          <div className='w-full md:w-[50%] bg-[#0B69FF1A] p-[20px] rounded-lg my-3'>
              <h1 className='text-[20px] font-[500] mb-3'>Order Summary</h1>
              <div className='flex justify-between my-3'>
                <p>Subtotal</p>
                <p>₹{subTotal}</p>
              </div>
              <div className='flex justify-between mt-3'>
                <p>Delivery Charges</p>
                <p>{delivaryCharges === 0 ? "Free" : `₹${delivaryCharges}`}</p>
              </div>
              <span className='text-[12px] text-gray-600 mb-3'>{delivaryCharges > 0 ? `(Add items of ${500 - subTotal} for free delivery)` : ""}</span>
              <div className='flex justify-between my-3'>
                <p>Taxes and Charges</p>
                <p>₹{taxes}</p>
              </div>
              <hr className="my-3 text-[#CBD2D9]"/>
              <div className='flex justify-between my-3'>
                <h1 className='text-[20px] font-[600]'>Total</h1>
                <h1 className='text-[20px] font-[600]'>₹{subTotal+ delivaryCharges + taxes}</h1>
              </div>
              <div className="flex px-[10px] justify-end my-[15px]">
                <Link to="/payment">
                  <button  onClick={clearCart} className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer">
                    Place Order
                  </button>
                </Link>
              </div>
          </div>
        </div>
        <Footer />
      </div> : 
      <div>
        <EmptyCart/>
      </div>
      
  )
}

export default Cart