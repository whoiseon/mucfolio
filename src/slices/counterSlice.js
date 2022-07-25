import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setCounter: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCounter } = counterSlice.actions;

export default counterSlice;
