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
    getEvent: (state, action) => {
      state.data = action.payload;
    },
    sendAttend: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getEventAsync = () => async (dispatch) => {
  try {
    const response = await api.get("/listEventi");
    dispatch(getEvent(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const sendAttendAsync = (i) => async (dispatch) => {
  try {
    const response = await api.post(`/utenti/attendEvento/${i}`);
  } catch (err) {
    throw new Error(err);
  }
};

export const { getEvent, sendAttend } = eventSlice.actions;
export const showEvent = (state) => state.event.data;
export default eventSlice.reducer;
