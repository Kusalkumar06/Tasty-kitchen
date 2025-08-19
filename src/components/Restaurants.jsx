import React from 'react'
import RestaurantItems from './RestaurantItems';
import slice from '../redux/slices';
import { useSelector,useDispatch } from 'react-redux';
import Loader from './Loader';
import { BsFilterLeft } from "react-icons/bs";
import { HiArrowRightCircle,HiArrowLeftCircle } from "react-icons/hi2";

const actions = slice.actions
const sortbyOptions = [
  {
    optionId: "Lowest",
    displayText: "Lowest",
  },
  {
    optionId: "Highest",
    displayText: "Highest",
  },
];


function Restaurants(props) {
  const {restaurantList} = props;

  const dispatch = useDispatch()
  const {pageNum,activeOptionId,totalPage} = useSelector((store) => {
    return store.sliceState
  })

  const updateOptionId = (event) => {
    dispatch(actions.setActiveOptionId(event.target.value))
  }
  
  return (
    <div>
      <div className="Heading Container  mb-[25px]">
        <h1 className="text-[24px] md:text-[32px] mb-3 text-[#183B56] font-[600]">Popular Restaurants</h1>
        <div className="md:flex justify-between items-center">
          <p className="text-[12px] md:text-[16px] text-[#64748B] mb-3">Select Your favourite restaurant special dish and make your day happy...</p>
          <div className="flex items-center w-[170px] justify-between p-1 rounded-lg">
            <BsFilterLeft size={20} className='mt-[2px]'/>
            <p>Sort by</p>
            <select className='focus:outline-none focus:ring-0 mb-[1px] rounded' value={activeOptionId} onChange={updateOptionId}>
              {sortbyOptions.map((each) => (
                <option className='b-none' value={each.optionId} key={each.optionId}>{each.displayText}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <hr className="mb-[40px]" />

      {restaurantList.length > 0 ? (
        <div className="flex flex-wrap justify-between mb-[25px] md:mb-[40px]">
          {restaurantList.map((each) => (
            <RestaurantItems details={each} key={each.id} />
          ))}
        </div>
      ) : (
        <Loader />
      )}

      <div className="flex justify-center items-center mb-[30px] md:mb-[50px]">
        {pageNum > 1 && (
            <HiArrowLeftCircle size={24} onClick={() => dispatch(actions.setPageNum(pageNum - 1))} className='cursor-pointer'/>
        )}
        <p className="mx-5">{pageNum}</p>
        {pageNum < totalPage && (
          <HiArrowRightCircle size={24} onClick={() => dispatch(actions.setPageNum(pageNum + 1))} className='cursor-pointer'/>
        )}
      </div>
    </div>
  );
}

export default Restaurants
