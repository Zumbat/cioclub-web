import {
  Box,
  TextField,
  Typography,
  Grid,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  FormControl,
  Button,
  FormHelperText,
} from "@material-ui/core";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync, getAuth } from "../../../../features/userSlice";

import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./login.css";
import "../../Card/style.css";

export default function LoginCard({ title, location, time, type }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const token = localStorage.getItem("token");

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const newLogin = () => {
    dispatch(loginAsync(values));
    navigate({
      pathname: "../",
    });
  };

  const handleCreate = () => {
    navigate({
      pathname: "../registration",
    });
  };

  return (
    <Grid item xs={8} md={4} className={"loginCard"}>
      <Box>
        <Typography variant="h5">
          Esegui l'accesso al tuo account CIO Club
        </Typography>
      </Box>
      <Box>
        <Box className="email">
          <TextField
            fullWidth
            required
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleChange("email")}
          >
            Email
          </TextField>
        </Box>
        <Box className="password">
          <FormControl variant="outlined" fullWidth required>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    aria-describedby="outlined-weight-helper-text"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password *"
            />
            <FormHelperText id="outlined-weight-helper-text">
              Non trovo la mia password.
            </FormHelperText>
          </FormControl>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"flex-end"} className={"button"}>
        <Button onClick={newLogin} variant="contained" color={"primary"}>
          Accedi
        </Button>
      </Box>
      <Typography variant={"body1"}>
        Non hai un account? Creane uno <u onClick={handleCreate}>qui</u>.
      </Typography>
    </Grid>
  );
}
