<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;
=======
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setSearch } = filterSlice.actions;

export default filterSlice.reducer;
>>>>>>> d438e76 (Подключил git в VScode)
