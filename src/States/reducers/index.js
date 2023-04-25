import { createSlice } from "@reduxjs/toolkit";

export const incdecSlices = createSlice({
  name: "incdec",
  initialState: 10,
  reducers: {
    inc: (state, action) => {
      return (state += action.payload);
    },
    dec: (state, action) => {
      return (state -= action.payload);
    },
  },
});

export const { inc, dec } = incdecSlices.actions;

export default incdecSlices.reducer;
