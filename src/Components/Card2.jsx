import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from './redux/cartSlice';
import { toast } from 'react-toastify';

function Card2({ id, name, image, price, qty }) {
  const dispatch = useDispatch();

 

  return (
    <div className='w-full h-[120px] p-2 shadow-lg flex justify-between'>
      {/* Left Section: Image and Info */}
      <div className='w-[60%] h-full rounded-lg flex gap-5'>
        {/* Product Image */}
        <div className='w-[60%] h-full overflow-hidden'>
          <img src={image} alt={name} className='object-cover rounded-lg' />
        </div>
        
        {/* Product Details */}
        <div className='w-[40%] h-full flex flex-col gap-1'>
          <div className='text-lg text-gray-600 font-semibold'>{name}</div>
          {/* Quantity Controls */}
          <div className='w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg border-2 border-emerald-500 font-semibold'>
            <button 
              className='w-[30%] bg-white h-full flex justify-center items-center text-green-400 hover:bg-slate-200 duration-300'
              onClick={()=>dispatch(DecrementQty({id}))}
              >
              -
            </button>
            <span 
              className='w-[40%] bg-gray-200 h-full flex justify-center items-center text-green-400'>
              {qty}
            </span>
            <button 
              className='w-[30%] bg-white h-full flex justify-center items-center text-green-400 hover:bg-slate-200 duration-300'
              onClick={()=>dispatch(IncrementQty({id}))}
              >
              +
            </button>
          </div>
        </div>
      </div>
      
      {/* Right Section: Price and Delete */}
      <div className='flex flex-col gap-5 items-end justify-start p-1'>
        <span className='text-xl text-green-400 font-semibold'>Rs {price}/-</span>
        {/* Delete Button */}
        <RiDeleteBin5Line 
          className='text-red-400 text-2xl font-bold cursor-pointer' 
          onClick={() =>{
            dispatch(RemoveItem({ id }))
           

          }} 
        />
      </div>
    </div>
  );
}

export default Card2;
