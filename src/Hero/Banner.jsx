import React from "react";

import Slider from "react-slick";
import { bannerdata } from "../data/Data";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    PauseOnHove: false,
    PauseOnFocus: false,
  };
  return (
    <div className="rounded-3xl bg-gradient-to-l from-gray-700/60 py-2">
      <Slider {...settings}>
        {bannerdata.map((data, key) => (
          <div data-aos="zoom-out" data-aos-duration="1000"
            key={key}
            className=" sm:space-y-5 px-10 sm:px-20 sm:pt-48  sm:py-40 sm:relative z-30"
          >
            <img
              data-aos="zoom-in"
              data-aos-duration="1000"
              src={data.image}
              alt=""
              className="sm:absolute top-0 right-5 sm:top-10 w-2/3 sm:w-1/3 sm:right-40 "
            />
       
            <h3 className="font-semibold sm:text-2xl ">Beats Solo</h3>
            <p className="font-semibold text-5xl sm:text-7xl ">Wireless</p>
            <p className="uppercase text-gray-600 text-4xl md:text-8xl lg:text-9xl font-bold">
              {data.description}
            </p>
            <div data-aos="zoom-in" data-aos-duration="900" className="bg-red-500 w-6/12 sm:w-4/12 md:w-1/4 lg:w-2/12 flex items-center justify-center  rounded-full  py-1 md:py-2  lg:p-3 text-xs sm:text-[15px] hover:scale-110 transition-all duration-500 cursor-pointer">
              Shop By Category
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
