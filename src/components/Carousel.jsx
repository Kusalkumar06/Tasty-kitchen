import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loader from './Loader';



function Carousel(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Show arrows on larger screens
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 5000, // Time between slides in ms
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768, // For screens < 768px
        settings: {
          arrows: false, // Hide arrows on small screens
        },
      },
    ],
  };
  const {carouselList} = props
  return (
    carouselList.length > 0 ?  <Slider {...settings}>
      {carouselList.map((img) => {
        return (
          <div key={img.id}>
            <img className='w-full h-[188px] md:h-[387px]' src={img.image_url} />
          </div>
        );
      })}
    </Slider> :   <Loader/>
  )
}

export default Carousel
