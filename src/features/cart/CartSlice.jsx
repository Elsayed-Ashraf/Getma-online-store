import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
// const initialState = {
//   value: [],
// };
const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const initialState = {
  value: savedCart,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    Add: (state, action) => {
      // if (state.value.length > 0) {
      const exist = state.value.some((i) => i.id === action.payload.id);
      if (!exist) {
        state.value.push({ ...action.payload, quantity: 1 });
        toast.success("Successfully added!");
        localStorage.setItem("cart", JSON.stringify(state.value));
      } else {
        toast.success("this product already in cart");
      }
      // ===============================
      // }
      // else {
      //   state.value.push(action.payload);
      //   localStorage.setItem("cart", JSON.stringify(state.value));
      // }
    },
    removeitemFromCart: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload.id);
      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    plusitem: (state, action) => {
      state.value.some((i) => {
        i.id === action.payload.id ? (i.quantity += 1) : "";
      });

      localStorage.setItem("cart", JSON.stringify(state.value));
    },

    minusitem: (state, action) => {
      const exist = state.value.find((i) => i.id === action.payload.id);
      if (exist && exist.quantity > 1) {
        exist.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.value));
    },
  },
});
export const { Add, removeitemFromCart, plusitem, minusitem } =
  CartSlice.actions;
export default CartSlice.reducer;
