import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './cartSlice'
// Import the reducer from cartSlice.js

export const store = configureStore({
  reducer: {
    cart:cartSlice, 
    // Assign the reducer to the cart slice
  },
});
