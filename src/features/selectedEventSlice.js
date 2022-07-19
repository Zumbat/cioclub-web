import { createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

export const selectedEventSlice = createSlice({
  name: "selectedEvent",
  initialState: {
    data: {
      id: "",
    },
  },
  reducers: {
    setSelectedEvent: (state, action) => {
      state.data = action.payload;
      if (!action.payload) {
        const params = new URLSearchParams(window.location.search);
        state.data = params.get("id");
        console.log("fasaw");
      }
    },
  },
});

export const { setSelectedEvent } = selectedEventSlice.actions;
export const showSelectedEvent = (state) => state.selectedEvent.data;
export default selectedEventSlice.reducer;
