import React, { useEffect } from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import "aos/dist/aos.css";
import Aos from "aos";
import { useDispatch } from "react-redux";
import { AddItem } from "./redux/cartSlice";
import { toast } from "react-toastify";
function Card({ id, name, image, price, type }) {
  const dispatch=useDispatch()
  useEffect(() => {
    Aos.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <div className="w-[350px] h-[450px] md:w-[260px] md:h-[350px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:border-1 hover:border-green-400 transition-all  ">
      <div className="w-[100%] h-[60%] overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="object-cover w-full hover:scale-110 duration-300"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
        />
      </div>
      <div className=" text-2xl font-semibold text-gray-700"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        {name}
      </div>
      <div className=" flex justify-between items-center text-green-500 ">
        <div className=" font-semibold text-lg" >
          Rs {price}/-
        </div>
        <div className="flex items-center justify-center gap-2 font-semibold text-lg px-1">
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>
      <button
        className="w-full bg-green-500 p-2 rounded-lg text-white hover:bg-green-400 transition-all duration-200"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
        onClick={()=>{dispatch(AddItem({id:id,name:name,price:price,image:image,qty:1}))
        toast.success("Item added")
        }}
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
