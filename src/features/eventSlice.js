import { createSlice } from "@reduxjs/toolkit";
import api from "../API";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    data: {
      listEventi: [
        {
          idEvento: "",
          nome: "",
          descrizione: "",
          data: "",
          status: "",
          imgCopertina: "",
          isOnline: "",
          indirizzo: "",
          link: "",
          disable: "",
          created_at: "",
        },
      ],
    },
  },
  reducers: {
    addEvent: (state, action) => {
      console.log("state", state, "action", action);
      state.data = action.payload;
      console.log("dsadaws");
    },
  },
});

export const addEventAsync = () => async (dispatch) => {
  try {
    const response = await api.get("/listEventi");
    console.log(response);
    dispatch(addEvent(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { addEvent, getEvent } = eventSlice.actions;
export const showEvent = (state) => state.event.data;
export default eventSlice.reducer;
