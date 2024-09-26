import React from "react";
import { RecentNewsdata } from "../data/Data";

const RecentNews = () => {
  return (
    <div>
      <div className="flex items-center  text-center flex-col text-4xl font-bold  ">
        <h2>
          Recent News
          <p className="text-xs font-normal text-gray-600">Explore Our Blogs</p>
        </h2>
      </div>
      <div className=" px-5 md:px-0 md:space-y-0  grid sm:grid-cols-2 md:grid-cols-3 w-full gap-7 py-5  ">
        {RecentNewsdata.map((data, key) => (
          <div data-aos="zoom-in-up" data-aos-duration="1000"  className="flex-col flex items-start pb-5 relative group">
            <div className="bg-white rounded-xl  flex justify-center relative w-full overflow-hidden ">
              <div className=" duration-300 flex justify-center ">
                <img src={data.image} alt="" className="transition-transform duration-500 hover:scale-110 rounded-md" />
              </div>
            </div>
            <h5 className="text-xs text-gray-500">{data.date}</h5>
            <div className="flex flex-col font-semibold mt-2 items-start">
              <h3>{data.title}</h3>
              <h2 className=" mt-1 text-xs font-normal text-gray-500">
                minima facere deserunt vero illo beatae deleniti eius dolores
                consequuntur, eligendi corporis maiores molestiae laudantium.
                Porro?
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
