import React from "react";

import { productdata } from "../data/Data";

const Productlist = () => {
  return (
    <div className="">
      <div className="flex items-center  text-center flex-col text-5xl font-bold ">
        <h2>
          Our Products
          <p className="text-xs font-normal text-gray-600">
            Explore Our Products
          </p>
        </h2>
      </div>

      <div className=" grid-cols-2 grid md:grid-cols-4 w-full gap-10 py-5  ">
        {productdata.map((data, key) => (
          <div
            key={data}
            data-aos="zoom-in"
            data-aos-duration="2000"
            className="flex-col flex items-start pb-5 relative group"
          >
            <div className="bg-white rounded-md py-5 flex justify-center relative w-full">
              <div className="group-hover:blur-sm transition-blur duration-300 flex justify-center">
                <img src={data.image} alt="Boat Headphone" className="w-1/2" />
              </div>

              <button className="absolute bg-red-500 p-2 rounded-full px-4 z-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to cart
              </button>
            </div>

            <div className="flex flex-col mt-4 items-start">
              <h3>{data.title}</h3>
              <h2 className="font-bold">{data.price}</h2>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid-cols-2 grid md:grid-cols-4 w-full gap-10 py-5  ">
        {productdata.map((data, key) => (
          <div
          data-aos="zoom-in"
          data-aos-duration="2000" className="flex-col flex items-start pb-5 relative group">
            <div className="bg-white rounded-md py-5 flex justify-center relative w-full">
              <div className="group-hover:blur-sm transition-blur duration-300 flex justify-center">
                <img src={data.image} alt="Boat Headphone" className="w-1/2" />
              </div>

              <button className="absolute bg-red-500 p-2 rounded-full px-4 z-10 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Add to cart
              </button>
            </div>

            <div className="flex flex-col mt-4 items-start">
              <h3>{data.title}</h3>
              <h2 className="font-bold">{data.price}</h2>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Productlist;
