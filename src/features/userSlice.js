import { createSlice } from "@reduxjs/toolkit";
// import { useNavigate } from "react-router-dom";
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
    logout: (state) => {
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
    dispatch(registration(response.value));
  } catch (err) {
    throw new Error(err);
  }
};

// export const logoutAsync = value;
export const { login, saveToken, isLogged } = userSlice.actions;

export default userSlice.reducer;
