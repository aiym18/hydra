import { configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./AddProductSlise";
import { BasketSlice } from "./AddToBasketSlise";

export const store = configureStore({
  reducer: {
    todo: ProductSlice.reducer,
    addBasket:BasketSlice.reducer,
    addDelete:ProductSlice.reducer
  },
});
