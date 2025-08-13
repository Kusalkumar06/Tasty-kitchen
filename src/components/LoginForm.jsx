import React from 'react'
import Cookies from "js-cookie"
import { Navigate,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import slice from '../redux/slices';

const actions = slice.actions;

function LoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {username,password,showErr} = useSelector((store) => {
    return store.sliceState;
  })

  const handleUserName = (event) => {
      dispatch(actions.handleUserName(event.target.value));
  }

  const handlepassword = (event) => {
      dispatch(actions.handlepassword(event.target.value));
  }

  const renderusernameInput = () => {
    return (
      <div className="flex flex-col mb-4">
        <label
          htmlFor="username"
          className="mb-1 text-[#475569] font-[600] text-[15px]"
        >
          USERNAME
        </label>
        <input
          type="text"
          className="self-start p-[6px] outline-none bg-[#E2E8F0] rounded-[5px] w-[100%]"
          id="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleUserName}
        />
      </div>
    );
  }

  const renderPasswordinput = () => {
    return (
      <div className="flex flex-col mb-4">
        <label
          htmlFor="password"
          className="mb-1 text-[#475569] font-[600] text-[15px]"
        >
          PASSWORD
        </label>
        <input
          className="self-start p-[6px] outline-none bg-[#E2E8F0] rounded-[5px] w-[100%]"
          type="password"
          id="password"
          value={password}
          placeholder="Enter Password"
          onChange={handlepassword}
        />
      </div>
    );
  };

  const onSubmitSuccess = (jwt_token) => {
    Cookies.set("jwt_token",jwt_token,{expires : 30});
    navigate("/",{replace:true});
  }

  const onSubmitFailure = () => {
    dispatch(actions.handleShowErr());
  }

  const onClickSubmit = async (event) => {
    event.preventDefault();
    const userDetails = {username,password};
    const url = "https://apis.ccbp.in/login";
    const options = {
        method: "POST",
        body : JSON.stringify(userDetails)
    }
    const response = await fetch(url,options);
    const data = await response.json();

    console.log(response)

    if (response.ok){
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure();
    }
  }

  const token = Cookies.get("jwt_token")
  if (token !== undefined){
      return <Navigate to='/' />
  }

  return (
    <div className="login-page flex flex-col md:flex-row h-screen pl-[20px] md:pl-[0px]">
      <div className="Image for Smaller Devices: flex relative h-[50%] overflow-hidden mb-[50px] block md:hidden">
        <img className=" absolute rounded-[50%] w-[387px] h-[387px] top-[-70px] left-[90px]" src="https://res.cloudinary.com/dtrouncfb/image/upload/v1753885461/Rectangle_1456_yizpip.png"/>
        <p className="self-end w-[50%] text-start text-[24px]">Login</p>
      </div>
      <div className="login-container w-[100%] md:w-[60%] md:flex flex-col justify-center items-center">
        <div className="w-100% md:w-[45%] md:shadow-xl md:px-[50px]">
          <div className="Logo-container hidden md:block md:flex flex-col justify-center items-center">
            <img className="mb-2" src="https://res.cloudinary.com/dtrouncfb/image/upload/v1753885682/Group_7420_q3v36e.png" />
            <h1 className="font-[DM_Sans] text-[24px] font-[500] text-[#F7931E] mb-5">Tasty Kitchens</h1>
            <h1 className="text-[32px] mb-[50px]">Login</h1>
          </div>
          <form onSubmit={onClickSubmit} className="Form-container pr-[20px] md:pr-[0px]">
            <div>{renderusernameInput()}</div>
            <div>{renderPasswordinput()}</div>
            {showErr && (
              <p className="text-[#EF4444] mt-5">
                *Please enter a valid username & password
              </p>
            )}
            <button className="w-[100%] bg-[#F7931E] text-white mb-5 mt-3 p-[5px] rounded-lg cursor-pointer">
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="w-[40%] hidden md:block">
        <img className="h-full w-[100%]" src="https://res.cloudinary.com/dtrouncfb/image/upload/v1753885461/Rectangle_1456_yizpip.png"/>
      </div>
    </div>
  );
}

export default LoginForm
