import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import userReducer from "./userSlice";

export default configureStore({
  reducer: {
    navbar: navReducer,
    user: userReducer,
  },
});
