import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    dispatchUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { dispatchUser } = userSlice.actions;
export default userSlice.reducer;
