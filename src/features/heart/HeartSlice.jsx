import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const savedheart = JSON.parse(localStorage.getItem("heart")) || [];

const initialState = {
  value: savedheart,
};

const HeartSlice = createSlice({
  name: "heart",
  initialState,
  reducers: {
    addToHeart: (state, action) => {
      // const exist = state.value.some((i) => i.id === action.payload.id);
      // if (!exist) {
      state.value.push(action.payload);
      localStorage.setItem("heart", JSON.stringify(state.value));
      toast.success("Added to favorites");
      // }
      //    else {
      //     toast("Already in favorites");
      //   }
    },
    removeFromHeart: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("heart", JSON.stringify(state.value));

      toast.error("Removed from favorites");
    },
    // clearHeart: (state) => {
    //   state.value = [];
    //   toast("Favorites cleared ");
    // },
  },
});

export const { addToHeart, removeFromHeart } = HeartSlice.actions;
export default HeartSlice.reducer;
