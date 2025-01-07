import React, { createContext, useState } from 'react'
import { food_items } from '../Components/food_items';

export const dataContext=createContext();
function UserContext({children}) {
    const [input,setInput]=useState('');
     const [cate,setcate]=useState(food_items);
    let data={
    input,
    setInput,
    cate,
    setcate
    }
  return (
    <div>
      <dataContext.Provider value={data}>
      {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext
