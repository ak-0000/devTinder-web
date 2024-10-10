import { createSlice } from "@reduxjs/toolkit";

const connectionSlice = createSlice({
  name: "connection",
  initialState: null,
  reducers: {
    addconnection: (state, action) => {
      return action.payload;
    },
    removeconnnection: (state, action) => {
      return null ;
    },
  },
});

export const { addconnection, removeconnnection } = connectionSlice.actions;

export default connectionSlice.reducer ;
