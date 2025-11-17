import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import heartslice from "../features/heart/HeartSlice";
// import counterslice from "../features/counter/CounterSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    heart: heartslice,
    // counter: counterslice,
  },
});
