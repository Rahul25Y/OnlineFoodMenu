import React from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
function Nav() {
  return (
    <div className='w-full h-[100px]  flex justify-between items-center px-5 md:px-8 '>
      <div className='w-[60px] h-[58px] bg-white flex items-center justify-center rounded-md shadow-md '>
        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>
        </div>
        <form className='w-[54%] md:w-[67%] bg-white h-[52px] flex items-center px-5 gap-3 shadow-md rounded-md'>
         <IoSearch className='text-green-600 text-2xl'/>
         <input type='text' placeholder='Search items...'
         className='w-full outline-none text-xl text-green-500'
         />
        </form>
        <div className='w-[60px] h-[58px] bg-white flex items-center justify-center rounded-md shadow-md relative'>
        <span className=' absolute top-0 right-2 text-green-500 font-bold text-[18px]'>0</span>
        <LuShoppingBag  className='w-[30px] h-[30px] text-green-500 '/>
        </div>
    </div>
  )
}

export default Nav
