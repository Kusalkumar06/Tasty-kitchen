import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import slice from '../redux/slices';

const actions = slice.actions;

function FoodItem(props) {
    const dispatch = useDispatch()
    const {food} = props;
    const {name,cost,rating,image_url,id} =food
    const {items} = useSelector((store) => {
        return store.sliceState;
    })
    const foodItem = items.find((each) => each.id === id)
    const count = foodItem ? foodItem.quantity : 0

  return (
    <div className="w-[100%] md:w-[45%] lg:w-[30%] my-[20px] flex justify-between p-[10px] md:p-3 shadow-lg rounded-lg md:mx-[15px]">
      <div>
        <img className="w-[160px] h-[110px] md:w-[245px] md:h-[140px] rounded-lg" src={image_url}/>
      </div>
      <div className="w-[45%] ml-3 flex flex-col justify-between md:justify-around">
        <h1 className="text-[16px] md:text-[] text-[#334155] font-[600]">{name}</h1>
        <p className="text-[14px] md:text-[] text-[#334155] font-[]">₹ {cost}.00</p>
        <p className="text-[14px] md:text-[] text-[#1E293B] font-[]"><span className="text-[]">⭐</span> {rating}</p>
        <div className="Add to Cart Button Container.">
          {count === 0 ? (
            <button onClick={() => { dispatch(actions.addToCart({ id, name, image_url, cost })); }} className="border-1 bg-[none] border-[#FFA412] px-[10px] cursor-pointer rounded-lg">Add</button>
          ) : (
            <div className="flex">
              <div className="flex items-center justify-around">
                <button onClick={() => { dispatch(actions.removeFromCart(id)); }} className="border-1 rounded-sm px-2 cursor-pointer" >-</button>
                <p className="mx-3">{count}</p>
                <button onClick={() => { dispatch(actions.addToCart({ id, name, image_url, cost })); }} className="border-1 rounded-sm px-2 cursor-pointer">+</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodItem
