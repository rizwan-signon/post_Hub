import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import themeSlice from "./slices/theme";
const store = configureStore({
  reducer: {
    user: userSlice,
    theme: themeSlice,
  },
});

export default store;
