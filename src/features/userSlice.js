import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
import api from "../API";

const initialState = {
  value: {
    name: "",
    email: "",
  },
  data: {
    nome: "",
    cognome: "",
    email: "",
    pwd: "",
    dataNascita: "",
    descrizione: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState: {
    initialState,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    registration: (state, action) => {
      state.data = action.payload;
    },
    deleteUser: (state) => {
      state.value = initialState;
    },
  },
});

export const loginAsync = (value) => async (dispatch) => {
  try {
    const response = await api.post("/utenti/logIn", value);
    localStorage.setItem("token", JSON.stringify(response.data.token));

    dispatch(login(value));
    console.log("aaaa", response);
  } catch (err) {
    throw new Error(err);
  }
};

export const registrationAsync = (value) => async (dispatch) => {
  try {
    console.log(value);
    const response = await api.post("/signUp", value);
    console.log(response);
    // if (response.status === 200) {
    dispatch(registration(value.utente));
    // }
  } catch (err) {
    throw new Error(err);
  }
};

export const { login, registration } = userSlice.actions;

export default userSlice.reducer;
