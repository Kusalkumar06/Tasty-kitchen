import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import EmptyCart from './EmptyCart';
import slice from "../redux/slices";

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
  const total = items.reduce(reducer,0)

  return (
    items.length > 0 ? 
      <div>
        <div className='mb-[65px] md:mb-[80px]'>
          <Header />
        </div>
        <div className="my-[30px] md:my-[50px] px-[0px] md:px-[100px] p-[10px]">
          <div className="bg-[white] md:bg-[#0B69FF1A] p-[0] md:p-[20px] rounded-lg">
            <div className="hidden md:flex justify-around">
              <p>Item</p>
              <p>Quantity</p>
              <p>Price</p>
            </div>
            <hr className="hidden md:block my-[15px] text-[#CBD2D9]" />
            <div className="For-desktop-view hidden md:block">
              {items.map((each) => {
                return <CartItem details={each} key={each.id} />;
              })}
            </div>
            <div className="For-mobile-view block md:hidden">
              <div>
                {items.map((each) => {
                  return <CartItem details={each} key={each.id} />;
                })}
              </div>
            </div>
            <hr className="m-[15px] text-[#CBD2D9]" />
            <div className="flex justify-between px-[10px] md:px-[160px] my-[15px]">
              <p className="text-[16px] md:text-[24px] text-[#3E4C59]">Order Total:</p>
              <p className="text-[16px] md:text-[24px] text-[#3E4C59]">₹{total}.00</p>
            </div>
            <div className="flex px-[10px] md:px-[130px] justify-end my-[15px]">
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
