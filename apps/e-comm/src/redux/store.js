// store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./productSlice";
import loginReducer from "./loginSlice";
import searchReducer from "./searchSlice";
import formReducer from "./dynamicForm";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    login: loginReducer,
    search: searchReducer,
    dynamicFrom: formReducer,
  },
});
