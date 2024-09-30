import React from 'react'
import { MenuLinks } from '../data/Data'
import { IoMdSearch } from 'react-icons/io'
import { FaCartShopping } from "react-icons/fa6";
import Darktheme from './Darktheme';
// import Darktheme from './Darktheme';


function Navbar() {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40  '>
            <div className='py-5 flex justify-between'>
                <div className='flex  gap-12 '>
                    <h3 className=' text-2xl sm:text-3xl uppercase font-semibold text-red-500 my-auto'><a href=''>eshop</a></h3>
                    <div className='lg:flex items-center gap-4 hidden   '>
                        {MenuLinks.map((data, index) => (
                            <ul key={index}>
                                <li className='text-[17px] text-gray-500 hover:text-black  font-mono dark:hover:text-white  duration-200'><a href='#'>{data.name}</a></li>
                            </ul>
                        ))}

                        {/* <h4 className='text-[17px] text-gray-500 hover:text-black  font-mono flex items-center '>
                            Quick Links <img src={drop} alt="" className='w-3 ml-2 h-3' /></h4> */}

                    </div>
                </div>
                <div className='flex  items-center space-x-3 '>
                    {/* navbar right  */}
                    <div className=' relative group '>
                        {/* search */}
                        <input type='search' placeholder='search' className='w-0  rounded-full  group-hover:w-[350px] transition-all duration-300 group-hover:boder group-hover:border-gray-500 group-hover:px-3  group-hover:py-1  focus:outline-none focus:border-1
                             dark:boder-gray-100 dark:text-black '/>
                        <IoMdSearch className='text-xl text-gray-500 dark:text-gray-50  cursor-pointer absolute top-1/3 right-3 -translate-y-1/3 group-hover:text-pretty hover:text-red-500' />

                    </div>
                    <button>
                        {/* <img src={cart} alt="" className='w-8 h-8' /> */}<FaCartShopping className='text-xl text-gray-900 dark:text-gray-50 relative ' />
                        <div className='w-4 h-4 bg-red-500 rounded-full flex items-center text-xs absolute top-4 right-12'>
                            10
                        </div>
                    </button>
                    <div>
                        <Darktheme />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar