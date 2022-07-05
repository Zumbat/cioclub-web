import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../features/eventSlice";
import userSlice from "../features/userSlice";
export default configureStore({
  reducer: {
    event: eventSlice,
    user: userSlice,
  },
});
