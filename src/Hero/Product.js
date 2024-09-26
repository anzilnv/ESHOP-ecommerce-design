import React from "react";
import image from "../assets/headphone-removebg-preview.png";
const Product = () => {
  return (
    <div>
      <div className="h-full py-20  ">
        <div className="col-span-2 w-full py-4  rounded-3xl bg-red-500 md:flex justify-between lg:relative  ">
          <div className="px-5 lg:py-10  w-1/3">
            <h3 data-aos="fade-right" data-aos-duration="1000" className=" text-xs lg:text-base ">30%</h3>
            <p data-aos="zoom-out" data-aos-duration="1000" className="font-bold text-2xl lg:text-7xl max-w-[200px] ">
              FINE SMILE
            </p>
            <p className="uppercase  text-xl lg:text-7xl  font-bold"></p>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="text-xs md:text-base">10 jan to 28 jan</h3>
            {/* <button className='bg-white text-red-500 w-4/12 md:w-2/12 p-1 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110 '>Browser</button> */}
          </div>
          <img  data-aos="zoom-in"
     data-aos-duration="2000"
            src={image}
            alt=""
            className="flex items-center lg:absolute lg:-bottom-7 xl:-bottom-5 2xl:-bottom-10 w-5/6 sm:5/12 md:w-1/3 lg:w-4/12 xl:w-4/12 2xl:w-3/12 lg:right-[400px] xl:right-[420px] 2xl:right-[580px]"
          />

          <div>
            <div data-aos="fade-up" data-aos-duration="1000" className="px-5 lg:py-10  lg:space-y-5">
              <h3 data-aos="fade-right" data-aos-duration="1000" className="  text-lg lg:text-xl font-bold ">Air Solo Bass</h3>
              <p className="font-bold  text-2xl lg:text-5xl ">Winter Sale</p>
              <p className="uppercase  text-xs max-w-[350px] mt-3">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                reiciendis
              </p>

              <button className="mt-2 bg-white text-red-500 w-4/12  md:w-5/12 2xl:w-4/12 p-1 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110 ">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
