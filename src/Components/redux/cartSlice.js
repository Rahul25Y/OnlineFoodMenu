import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // Add an item to the cart
    AddItem: (state, action) => {
      const existItem = state.find((item) => item.id === action.payload.id);
      if (existItem) {
        // Update the quantity of the existing item
        existItem.qty += 1;
      } else {
        // Add new item to the cart
        state.push({ ...action.payload, qty: 1 });
      }
    },
    // Remove an item from the cart
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    // IncrementQty:(state,action)=>{
    //     return state.map((item)=>(item.id===action.payload.id)?{...item,qty:item.qty+1}:item)
    // }
    // Increment the quantity of a specific item
    IncrementQty: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.qty += 1;
      }
    },
    // Decrement the quantity of item.
    DecrementQty:(state,action)=>{
        const item=state.find((item)=>item.id===action.payload.id)
        if(item){
           if(item.qty>1){
            item.qty -=1;
           }else {
            // Remove the item if qty is 1
            // return state.filter((i) => i.id !== action.payload.id);
          }
        }
    }

  },
});

// Exporting the actions
export const { AddItem, RemoveItem, IncrementQty,DecrementQty } = cartSlice.actions;

// Exporting the reducer
export default cartSlice.reducer;
