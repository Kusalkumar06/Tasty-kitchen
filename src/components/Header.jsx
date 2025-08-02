import React from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import slice from '../redux/slices';

const actions = slice.actions

function Header() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onLogout = () => {
    Cookies.remove("jwt_token");
    navigate('/login',{replace:true})
  }

  const {isMenuOpen} = useSelector((store) => {
    return store.sliceState;
  })

  const setIsMenu = () => {
    dispatch(actions.setIsMenuOpen(!isMenuOpen));
  }

  const closeMenu = () => {
    dispatch(actions.setIsMenuOpen(false))
  }



  return (
    <header>
      <div className="Nav-bar-containier h-[15%] bg-[#F8FAFC] p-[15px] px-[25px] md:px-[50px] flex flex-row items-center justify-between">
        <div className="Logo-Container  w-[150px] md:w-[215px] flex justify-between items-center">
          <div>
            <img
              className="w-[39px] h-[32px] md:w-[53px] md:h-[43px]"
              src="https://res.cloudinary.com/dtrouncfb/image/upload/v1753885682/Group_7420_q3v36e.png"
            />
          </div>
          <p className="text-[16px] font-[500] md:text-[24px] text-[#F7931E] ">
            Tasty Kitchens
          </p>
        </div>
        <div className="menu-bar for smaller devices: block md:hidden"
          onClick={setIsMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="hidden w-[30%] md:flex items-center justify-around ">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <button
            onClick={onLogout}
            className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-[100%] p-[10px] flex items-center justify-between">
          <div className="w-[75%] flex items-center justify-evenly">
            <Link onClick={closeMenu} to="/">
              Home
            </Link>
            <Link onClick={closeMenu} to="/cart">
              Cart
            </Link>
            <button
              onClick={() => {closeMenu();onLogout();}}
              className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer"
            >
              Logout
            </button>
          </div>
          <div className='Cancel-icon' onClick={closeMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-5"
            >
              <path
                fillRule="evenodd"
                d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.78-4.22a.75.75 0 0 1-1.06 0L8 9.06l-1.72 1.72a.75.75 0 1 1-1.06-1.06L6.94 8 5.22 6.28a.75.75 0 0 1 1.06-1.06L8 6.94l1.72-1.72a.75.75 0 1 1 1.06 1.06L9.06 8l1.72 1.72a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header
