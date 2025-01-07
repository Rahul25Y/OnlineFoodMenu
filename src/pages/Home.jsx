import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import Categories from "../Components/Category"; // Ensure Categories is an array
import Card from "../Components/Card";
import { food_items } from "../Components/food_items";
import { dataContext } from "../context/UserContext";


function Home() {
  // const [cate,setcate]=useState(food_items);
  let{cate,setcate,input}=useContext(dataContext)
  function filter(category){
   if(category=='All'){
    setcate(food_items)
   }else{
    let newList=food_items.filter((item)=>(item.food_category===category))
    setcate(newList)
   }
  }
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
      :''
      }
      {/* card item box */}
      <div className="w-full flex justify-center items-center flex-wrap gap-5 px-4 pt-8 pb-8">
        {
        cate.map((item)=>(
          <Card id={item.id} name={item.food_name} image={item.food_image} price={item.price} type={item.food_type}/>
        ))
        }
      </div>
    </div>
  );
}

export default Home;
