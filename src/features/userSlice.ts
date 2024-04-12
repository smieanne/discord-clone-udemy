import { createSlice } from "@reduxjs/toolkit";
import { InitialUserSgtate } from "../Types";

const initialState : InitialUserSgtate = {
  user: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});
//console.log(userSlice);

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;