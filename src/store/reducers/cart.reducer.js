import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    goods: [],
  },
  name: "cart",
  reducers: {
    addGoods: (state, action) => {
      let num = state.goods.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (num === -1) {
        state.goods.push(action.payload);
      } else {
        state.goods[num].count += action.payload.count;
      }
    },
    removeGoods: (state, action) => {
      const id = action.payload;
      state.goods = state.goods.filter((item) => item.id !== id);
    },
    updateCount: (state, action) => {
      const counter = state.goods.findIndex(
        (product) => product.id === action.payload
      );
      if (counter !== -1) {
        state.goods[counter].count += 1;
      }
    },
  },
});

export const { addGoods, removeGoods, updateCount } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
