import React from 'react'
import RestaurantItems from './RestaurantItems';
import slice from '../redux/slices';
import { useSelector,useDispatch } from 'react-redux';
import Loader from './Loader';
import { BsFilterLeft } from "react-icons/bs";

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
  const {pageNum,activeOptionId} = useSelector((store) => {
    return store.sliceState
  })

  const updateOptionId = (event) => {
    dispatch(actions.setActiveOptionId(event.target.value))
  }

  return (
    <div>
      <div className="Heading Container  mb-[25px]">
        <h1 className="text-[24px] md:text-[32px] mb-3 text-[#183B56] font-[600]">
          Popular Restaurants
        </h1>
        <div className="md:flex justify-between items-center">
          <p className="text-[12px] md:text-[16px] text-[#64748B] mb-3">
            Select Your favourite restaurant special dish and make your day
            happy...
          </p>
          <div className="flex items-center w-[47%] md:w-[170px] justify-between border-1 p-1 rounded-lg">
            <BsFilterLeft size={20} className='mt-[2px]'/>
            <p>Sort by</p>
            <select className='focus:outline-none focus:ring-0 mb-[1px] rounded' value={activeOptionId} onChange={updateOptionId}>
              {sortbyOptions.map((each) => (
                <option className='' value={each.optionId} key={each.optionId}>{each.displayText}</option>
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
          <svg
            onClick={() => dispatch(actions.setPageNum(pageNum - 1))}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-4.28 9.22a.75.75 0 0 0 0 1.06l3 3a.75.75 0 1 0 1.06-1.06l-1.72-1.72h5.69a.75.75 0 0 0 0-1.5h-5.69l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3Z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <p className="mx-5">{pageNum}</p>
        {pageNum < 4 && (
          <svg
            onClick={() => dispatch(actions.setPageNum(pageNum + 1))}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 cursor-pointer"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}

export default Restaurants
