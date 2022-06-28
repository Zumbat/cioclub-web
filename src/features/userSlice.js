import { createSlice } from "@reduxjs/toolkit";
import api from "../API";

const initialState = {
  value: {
    name: "",
    email: "",
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
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialState;
    },
  },
});

export const loginAsync = (value) => async (dispatch) => {
  try {
    console.log(value);
    const response = await api.post("/utenti/login", value);
    console.log(response);
    dispatch(login(response.value));
  } catch (err) {
    throw new Error(err);
  }
};

export const registrationAsync = (value) => async (dispatch) => {
  try {
    console.log(value);
    const response = await api.post("/signUp", value);
    console.log(response);
    dispatch(registration(response.value));
  } catch (err) {
    throw new Error(err);
  }
};

export const { login } = userSlice.actions;
export default userSlice.reducer;
