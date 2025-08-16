import React from 'react'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import slice from '../redux/slices';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="Nav-bar-containier h-[15%] bg-[#F8FAFC] p-[15px] px-[25px] md:px-[50px] flex flex-row items-center justify-between">
        <div onClick={() => {navigate('/')}} className="Logo-Container  w-[150px] md:w-[215px] flex justify-between items-center cursor-pointer">
          <div>
            <img className="w-[39px] h-[32px] md:w-[53px] md:h-[43px]" src="https://res.cloudinary.com/dtrouncfb/image/upload/v1753885682/Group_7420_q3v36e.png"/>
          </div>
          <p className="text-[16px] font-[500] md:text-[24px] text-[#F7931E] ">Tasty Kitchens</p>
        </div>

        <div className="hidden w-[30%] md:flex items-center justify-around ">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          <button onClick={onLogout} className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer" >Logout</button>
        </div>

        <div className="menu-bar for smaller devices: block md:hidden" onClick={setIsMenu}>
          <FontAwesomeIcon icon={faBars} className=" text-[25px] md:text-[35px]" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="w-[100%] block md:hidden p-[10px] flex items-center justify-between">
          <div className="w-[75%] flex items-center justify-evenly">
            <Link onClick={closeMenu} to="/">Home</Link>
            <Link onClick={closeMenu} to="/cart">Cart</Link>
            <button onClick={() => {closeMenu();onLogout();}} className="p-[5px] bg-[#F7931E] rounded-lg px-[20px] text-white cursor-pointer" >Logout</button>
          </div>
          <div className='Cancel-icon' onClick={closeMenu}>
            <FontAwesomeIcon icon={faCircleXmark} className=" text-[20px] md:text-[35px]" />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header
