import React from 'react'

const Footer = () => {
  return (
    <div >
                  <div className="bg-gray-950 text-white py-10 ">
        <div className="text-[85px] sm:text-[138px] font-semibold md:text-[168px] lg:text-[343px] "></div>
        <div className="  md:w-full lg:flex">
          <div className=" md:w-1/3 md:pl-8 pl-6 ">
            <p>
              <h1 className="md:text-4xl text-red-500 font-semibold">ESHOP</h1>
              <h3 className="max-w-[300px] text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum  </h3> 
           
            </p>
          </div>

          <hr className="  w-full  lg:hidden  my-5"></hr>

          <div className=" pl-6 lg:grid grid-cols-3 w-2/3 lg:pl-16">
            <div className="lg:px-10">
              <ol className=" font-semibold text-base space-y-2 ">
                <li className=" text-xl pb-2 font-bold text-gray-400">Important Links</li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  Home
                </li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  About
                </li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  Contact
                </li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  Blog
                </li>
              </ol>
            </div>
            <div className="lg:px-10">
              <ol className=" text-base space-y-2  ">
                <li className="  text-xl pb-2 font-bold text-gray-400">Quick Links</li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  Home
                </li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  About
                </li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  Contact
                </li>
                <li className=" hover:underline cursor-pointer text-gray-600">
                  Blog
                </li>
              </ol>
            </div>

            <div className='text-gray-600'>
              <h3 className="text-xl pb-8 font-bold text-gray-400">Address</h3>
              <div className="flex">
                {/* <img src="" alt="2" className="mr-2" /> */}
                <p>Noida , Uttar Pradesh</p>
              </div>
              <div className="flex">
                {/* <img src="" alt="2" className="mr-2" /> */}
                <p>+91 1234567890</p>
              </div>
              <div className="flex">
                {/* <img src="" alt="" className="mr-2" />
                    <img src="" alt="" className="mr-2" />
                    <img src="" alt="" className="mr-2" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer