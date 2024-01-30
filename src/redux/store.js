<<<<<<< HEAD
import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
=======
import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    cart,
  },
});
>>>>>>> d438e76 (Подключил git в VScode)
