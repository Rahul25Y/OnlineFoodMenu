import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Components/Category"; // Ensure Categories is an array
import Card from "../Components/Card";
import { food_items } from "../Components/food_items";
import { dataContext } from "../context/UserContext";
import { RxCross2 } from "react-icons/rx";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";


function Home() {
  // const [cate,setcate]=useState(food_items);
  let{cate,setcate,input,setShowCart,showCart}=useContext(dataContext)
  function filter(category){
   if(category=='All'){
    setcate(food_items)
   }else{
    let newList=food_items.filter((item)=>(item.food_category===category))
    setcate(newList)
   }
  }

  const items=useSelector(state=>state.cart)
  // const subtotal=items.reduce((total,item)=>total+item.price,0)
  const subtotal=items.reduce((total,item)=>total+item.qty*item.price,0)
  console.log(subtotal);
  const deliveryFee=20;
  const taxes=subtotal*0.5/100;
  let total=Math.floor(subtotal+deliveryFee+taxes);
  
  
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />
      {
        !input?<div className="flex justify-center items-center gap-5 flex-wrap w-full">
        {Categories.map((item) => (
          <div
            key={item.id}
            className="cart group relative w-[130px] h-[140px] bg-white flex justify-center items-center flex-col-reverse gap-4 p-3 font-semibold text-gray-600 rounded-lg  transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={()=>filter(item.name)}
          >
            {item.name}
            {item.icon}
            {/* Background decoration for hover effect */}
          </div>
        ))}
      </div>
      :null
      }
      {/* card 1 item box */}
      <div className="w-full flex justify-center items-center flex-wrap gap-5 px-4 pt-8 pb-8">
       {cate.length>1?
        
        cate.map((item)=>(
          <Card id={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type}/>
        ))
        :<div className="text-center text-3xl text-green-500 font-bold">No Dish Found</div>}
      </div>
      {/* ShowCart */}
      <div className={`w-full md:w-[40vw] h-[100%] bg-white fixed top-0 right-0 p-5 transition-all duration-500 overflow-auto shadow-lg flex flex-col items-center ${showCart?' translate-x-0':' translate-x-full'}`}>
        <header className="w-full flex justify-between items-center gap-3">
         <span className=" text-2xl text-green-400 font-medium">Order Items</span>
         <RxCross2 className=" text-2xl text-green-400 font-semibold cursor-pointer hover:text-gray-700"
          onClick={()=>{setShowCart(false)}}
         />
        </header>
        {
          items.length>0
          ?
        <>
        {/* second Card 2 */}
        <div className="w-full flex flex-col mt-8 gap-8">
          {
           items.map((item)=>(
            <Card2 name={item.name} image={item.image} price={item.price} id={item.id} qty={item.qty}/>
           ))
          }
        </div>
         {/* total qty or price */}
         <div className="w-full border-t-2 border-b-2 border-gray-500 mt-4 flex flex-col gap-2 p-8">
          <div className="w-full flex justify-between items-center">
           <span className="text-lg text-gray-600 font-semibold">Subtotal :</span>
           <span className="text-lg text-green-500 font-semibold">Rs {subtotal}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
           <span className="text-lg text-gray-600 font-semibold">DeliveryFee :</span>
           <span className="text-lg text-green-500 font-semibold">Rs {deliveryFee}/-</span>
          </div>
          <div className="w-full flex justify-between items-center">
           <span className="text-lg text-gray-600 font-semibold">Taxes :</span>
           <span className="text-lg text-green-500 font-semibold">Rs {taxes}/-</span>
          </div>
         </div>
         <div className="w-full flex justify-between items-center px-6 py-3">
           <span className="text-2xl text-gray-600 font-semibold">Total Price :</span>
           <span className="text-2xl text-green-500 font-semibold">Rs {total}/-</span>
          </div>
          <button className="w-[80%] p-3 mt-3 rounded-lg bg-green-500 text-white font-medium hover:bg-green-400 transition-all " 
          onClick={()=>{
            toast.success("order place")
          }}
          >Place Order</button>
          </>:
          <div className="text-2xl text-center md:py-7 py-10  font-semibold text-green-500">
            <p>Empty Cart</p>
          </div>
          }
      </div>
      {/* ++++++ */}
    </div>
  );
}

export default Home;
