import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../features/eventSlice";

export default configureStore({
  reducer: {
    event: eventSlice,
  },
});
