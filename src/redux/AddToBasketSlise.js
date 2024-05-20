import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket"))||[],
};
export const BasketSlice = createSlice({
  name: "ADDBASKET",
  initialState,
  reducers: {
    addBasket(state, action) {
      state.basket = [...state.basket, action.payload];
    },
    addDelete(state, action) {
        state.basket = state.basket.filter((el) => el.id !== action.payload.id);
        localStorage.setItem(
          "basket",
          JSON.stringify([...state.basket, action.payload])
        );
        state.product = [...state.basket, action.payload];
      },
      
  },
});

export const { addBasket,addDelete } = BasketSlice.actions;
export default BasketSlice.reducer;
