import { createSlice } from "@reduxjs/toolkit";
import api from "../API";

export const partecipazioniSlice = createSlice({
  name: "partecipazioni",
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
    getPartecipazioni: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const getPartecipazioniAsync = () => async (dispatch) => {
  try {
    // const response = await api.get("/utenti/listEventi");
    console.log("getPartecipazioni");
    // dispatch(getPartecipazioni(response.data));
  } catch (err) {
    throw new Error(err);
  }
};

export const { getPartecipazioni } = partecipazioniSlice.actions;
export const showPartecipazioni = (state) => state.partecipazioni.data;
export default partecipazioniSlice.reducer;
