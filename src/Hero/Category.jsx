import React from "react";
// import earphone from '../assets/earphone-removebg-preview.png'
import watch from "../assets/watchb.png";
import watch1 from "../assets/watch-removebg-preview.png";
import lap from "../assets/product2-removebg-preview.png";
import vr from "../assets/vr.png";
import product1 from "../assets/product1-removebg-preview.png";
import earphone from "../assets/band-removebg-preview.png";
import { Smalliconsdata } from "../data/Data";

const Category = () => {
  return (
    <div>
      <div className="w-full sm:grid grid-cols-2  lg:flex gap-8 space-y-5 md:space-y-0 h-full py-10">
        <div className=" lg:w-1/3 pt-28   rounded-3xl bg-black  justify-start relative ">
          <div className="px-5 py-10">
            <h3 className="font-semibold text-lg text-gray-500">Enjoy With</h3>
            {/* <p className="font-semibold text-2xl "></p> */}
            <p className="uppercase text-gray-500 text-5xl font-bold ">
              earphone
            </p>
            <button className="mt-2 bg-red-500 hover:bg-red-600 w-4/12 p-2 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110 shadow-2xl    ">
              Browser
            </button>

            <img
              src={earphone}
              alt=""
              className="absolute right-2 -top-8 w-3/6"
            />
          </div>
        </div>

        <div className="w-full lg:w-1/3 pt-28   rounded-3xl bg-yellow-400  justify-start relative overflow-hidden z-40 ">
          <div className="px-5 py-10">
            <h3 className="font-semibold text-lg text-gray-600">Enjoy With</h3>
            <p className="font-semibold text-2xl "></p>
            <p className="uppercase text-gray-800 text-5xl font-bold pb-2 ">
              WATCH
            </p>
            <button className="text-yellow-400  bg-white w-4/12 p-2 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110 shadow-2xl   ">
              Browser
            </button>

            <img
              data-aos="zoom-out"
              data-aos-duration="1000"
              src={watch1}
              alt=""
              className="absolute top-[50px] w-7/12 right-4 "
            />
          </div>
        </div>
        <div className="col-span-2 w-full lg:w-2/3 pt-28   rounded-3xl bg-red-500  justify-start relative ">
          <div className="px-5 py-10">
            <h3 className="font-semibold text-lg  ">Enjoy With</h3>
            <p className="font-semibold text-2xl "></p>
            <p className="uppercase text-gray-600 text-5xl font-bold pb-2">
              HEADPHONE
            </p>
            <button className="bg-white text-red-500 w-4/12 md:w-2/12 p-2 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110 shadow-2xl  ">
              Browser
            </button>

            <img
              data-aos="zoom-out"
              data-aos-duration="1000"
              src={lap}
              alt=""
              className="absolute top-9 w-4/12 right-4"
            />
          </div>
        </div>
      </div>

      <div className="grid  w-full sm:grid grid-cols-2 lg:flex gap-8 h-full py-5 space-y-5 md:space-y-0">
        <div className=" col-span-2 md:col-span-1 lg:w-2/3 pt-28   rounded-3xl bg-gradient-to-br from-white  justify-start relative ">
          <div className="px-5 py-10">
            <h3 className="font-semibold text-lg text-gray-200">Enjoy With</h3>
            {/* <p className="font-semibold text-2xl "></p> */}
            <p className="uppercase text-gray-800 text-4xl font-bold pb-2">
              headphone
            </p>
            <button className="bg-red-500 text-white w-4/12 md:w-2/12 p-2 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110  shadow-2xl ">
              Browser
            </button>

            <img
              data-aos="zoom-out"
              data-aos-duration="1000"
              src={product1}
              alt=""
              className="absolute top-9 w-4/12 right-4"
            />
          </div>
        </div>
        <div className=" lg:w-1/3    rounded-3xl bg-green-500  justify-start relative z-40 ">
          <div className="px-5 py-10 ">
            <h3 className="font-semibold text-lg text-gray-200">Enjoy With</h3>
            <p className="font-semibold text-2xl "></p>
            <p className="uppercase text-gray-800 text-4xl font-bold pb-2">
              VIRTUAL
            </p>
            <button className="bg-white text-green-500 w-4/12 p-1 flex items-center justify-center rounded-full  text-base hover:scale  ">
              Browser
            </button>

            <img
              data-aos="zoom-out"
              data-aos-duration="1000"
              src={vr}
              alt=""
              className="absolute bottom-0 right-0  w-[100rem] z-20"
            />
          </div>
        </div>
        <div className=" col-span-1 lg:w-1/3   rounded-3xl bg-blue-600  justify-start relative ">
          <div className="px-5 py-10">
            <h3 className="font-semibold text-lg text-gray-200">Enjoy With</h3>
            <p className="font-semibold text-2xl "></p>
            <p className="uppercase text-gray-800 text-4xl font-bold pb-2">
              watch
            </p>
            <button className="text-blue-600 bg-white w-4/12 p-1 flex items-center justify-center rounded-full  text-base hover:transition-all hover:duration-300 duration-300 hover:scale-110 shadow-2xl ">
              Browser
            </button>

            <img
              data-aos="zoom-out"
              data-aos-duration="1000"
              src={watch}
              alt=""
              className="absolute -top- md:bottom-2 w-3/6 md:right-4"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2  md:flex justify-around py-10">
          {Smalliconsdata.map((data, key) => (
            <div key={data.id} className="flex mx-auto font-bold text-xl items-center">
              <img src={data.image} alt="" width={80} className="" />
              <div className="ml-2">
                <h5 className=" ">{data.title}</h5>
                <p className="text-xs text-gray-600">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
