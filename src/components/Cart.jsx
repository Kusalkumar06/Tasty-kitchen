import React from 'react'
import Header from './Header';
import Footer from './Footer';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Cart() {

  const {items} = useSelector((store) => {
    return store.sliceState
  })

  const reducer = (price,item) => price + (item.cost * item.quantity)
  const total = items.reduce(reducer,0)

  return (
    <div>
      <Header />
      <div className="hidden md:block my-[50px] px-[100px] p-[10px]">
        <div className="bg-[#0B69FF1A] p-[20px]">
          <div className="flex justify-around">
            <p>Item</p>
            <p>Quantity</p>
            <p>Price</p>
          </div>
          <hr className="my-[15px] text-[#CBD2D9]" />
          <div>
            {items.map((each) => {
              return <CartItem details={each} key={each.id} />;
            })}
          </div>
          <hr className="my-[15px] text-[#CBD2D9]" />
          <div className='flex justify-between px-[160px] my-[15px]'>
            <p className="text-[24px] text-[#3E4C59]">Order Total:</p>
            <p className="text-[24px] text-[#3E4C59]">₹{total}.00</p>
          </div>
          <div className='flex px-[130px] justify-end my-[15px]'>
            <Link to='/payment'><button className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer">Place Order</button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Cart
