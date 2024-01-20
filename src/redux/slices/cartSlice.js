import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartItemsNumber: 0,
  totalPrice: 0,
};

// Вынесение повторяющегося кода в отдельные функции
function refreshData(state) {
  state.cartItemsNumber = state.cartItems.reduce((sum, obj) => obj.count + sum, 0);
  state.totalPrice = state.cartItems.reduce((sum, obj) => obj.price * obj.count + sum, 0);
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
}
function findItem(state, props) {
  const foundItem = state.cartItems.find(
    (obj) => obj.id == props.id && obj.type == props.type && obj.size == props.size
  );
  return foundItem;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    InitializeCartItems(state, action) {
      state.cartItems = action.payload;
      refreshData(state);
    },
    addItem(state, action) {
      const foundItem = findItem(state, action.payload);
      if (foundItem) {
        foundItem.count++;
      } else {
        state.cartItems.push(action.payload);
        action.payload.count = 1;
      }
      refreshData(state);
    },
    removeItem(state, action) {
      state.cartItems = state.cartItems.filter(
        (obj) =>
          obj.id !== action.payload.id || obj.type !== action.payload.type || obj.size !== action.payload.size
      );
      refreshData(state);
    },
    clearItems(state) {
      state.cartItems = [];
      refreshData(state);
    },
    changeCount(state, action) {
      if (action.payload.props.count !== 1 || action.payload.number !== -1) {
        const foundItem = findItem(state, action.payload.props);
        foundItem.count += action.payload.number;
        refreshData(state);
      }
    },
  },
});

export const { InitializeCartItems, addItem, removeItem, clearItems, changeCount } = cartSlice.actions;

export default cartSlice.reducer;
