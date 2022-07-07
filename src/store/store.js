import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "../features/eventSlice";
import partecipazioniSlice from "../features/partecipazioniSlice";
import userSlice from "../features/userSlice";
export default configureStore({
  reducer: {
    event: eventSlice,
    user: userSlice,
    partecipazioni: partecipazioniSlice,
  },
});
