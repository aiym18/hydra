import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: JSON.parse(localStorage.getItem("product")) || [],
  basket: [],
  man: [],
  woman: [],
  kids: [],
  detalis: {},
  search: [],
};

export const ProductSlice = createSlice({
  name: "ADDTOPRODUCT",
  initialState,
  reducers: {
    addProduct(state, action) {
      localStorage.setItem(
        "product",
        JSON.stringify([...state.product, action.payload])
      );
      state.product = [...state.product, action.payload];
    },
    categoryMan(state, action) {
      state.man = state.product.filter((el) => el.category === "man");
    },
    categoryWoman(state, action) {
      state.woman = state.product.filter((el) => el.category === "woman");
    },
    categoryKids(state, action) {
      state.kids = state.product.filter((el) => el.category === "kids");
    },
    sortProduct(state, action) {
      if (action.payload === "expensive") {
        state.product = state.product.sort((a, b) => a.price - b.price);
      } else if (action.payload === "cheap") {
        state.product = state.product.sort((a, b) => b.price - a.price);
      }
    },
    detalisProduct(state, action) {
      state.detalis = state.product.find((el) => el.id === action.payload);
    },
    productSearch(state, action) {
      state.search = state.product.filter((el) => el.title === action.payload);
    },
  },
});

export const {
  addProduct,
  categoryMan,
  categoryWoman,
  categoryKids,
  sortProduct,
  detalisProduct,
  productSearch,
} = ProductSlice.actions;
export default ProductSlice.reducer;
