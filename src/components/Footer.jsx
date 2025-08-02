import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faSquarePinterest,faXTwitter,faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="w-full h-[200px] md:h-[300px] bg-[#0F172A] flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-2">
        <img
          className="w-[36px] h-[29px] md:w-[49px] md:h-[39px] mr-2"
          src="https://res.cloudinary.com/dtrouncfb/image/upload/v1754081562/Frame_275_equrac.png"
        />
        <p className="text-white text-[20px] md:text-[30px]">Tasty Kitchens</p>
      </div>
      <p className="text-[14px] md:text-[24px] mb-1 text-white">
        The only thing we are serious about is food.
      </p>
      <p className="text-[14px] md:text-[24px] mb-[25px] text-white">
        Contact us on
      </p>
      <div className="Logos-container  w-[50%] md:w-[15%] flex justify-between">
        <div>
          <FontAwesomeIcon icon={faSquarePinterest} className="text-white text-[30px] md:text-[35px]" />
        </div>
        <div>
          <FontAwesomeIcon icon={faInstagram} className="text-white text-[30px] md:text-[35px]" />
        </div>
        <div>
          <FontAwesomeIcon icon={faXTwitter} className="text-white text-[30px] md:text-[35px]" />
        </div>
        <div>
          <FontAwesomeIcon icon={faSquareFacebook} className="text-white text-[30px] md:text-[35px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer
