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

import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import { useDispatch } from "react-redux";
import { registrationAsync } from "../../../../features/userSlice";

import React, { useState, useEffect } from "react";
import "./registration.css";
import "../../Card/style.css";

export default function RegistrationCard({ title, location, time, type }) {
  const [values, setValues] = useState({
    utente: {
      nome: "",
      cognome: "",
      email: "",
      pwd: "",
      dataNascita: "",
      descrizione: "",
    },
  });
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (fields) => (event) => {
    if (fields != "dataNascita") {
      setValues((prevState) => ({
        ...prevState,
        utente: {
          ...prevState.utente,
          [fields]: event.target.value,
        },
      }));
    } else if (fields == "dataNascita" && event != "Invalid Date") {
      setValues((prevState) => ({
        ...prevState,
        utente: {
          ...prevState.utente,
          [fields]: event,
        },
      }));
      console.log("famm nu bikk", event);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const dispatch = useDispatch();

  const newRegistration = () => {
    dispatch(registrationAsync(values));
  };

  useEffect(() => {
    dispatch(registrationAsync);
  }, []);

  return (
    <Grid item xs={8} className={" card"}>
      {/* <Box>
          <img src="" alt="Login" />
        </Box> */}
      <Box>
        <Typography variant="h5">Crea un account CIO Club</Typography>
      </Box>
      <Box>
        <Box className="nome">
          <TextField
            fullWidth
            required
            variant="outlined"
            label="Nome"
            value={values.utente.nome}
            onChange={handleChange("nome")}
          >
            Nome
          </TextField>
        </Box>
        <Box className="cognome">
          <TextField
            fullWidth
            required
            variant="outlined"
            label="Cognome"
            value={values.utente.cognome}
            onChange={handleChange("cognome")}
          >
            Cognome
          </TextField>
        </Box>
        <Box className="email">
          <TextField
            fullWidth
            required
            variant="outlined"
            label="Email"
            value={values.utente.email}
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
              value={values.utente.password}
              onChange={handleChange("pwd")}
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
          </FormControl>
        </Box>
        <Box className="dataNascita">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Data di nascita"
              value={values.utente.dataNascita}
              onChange={handleChange("dataNascita")}
              renderInput={(params) => (
                <TextField variant="outlined" fullWidth required {...params} />
              )}
            />
          </LocalizationProvider>
        </Box>
        <Box className="descrizione">
          <TextField
            fullWidth
            required
            variant="outlined"
            label="Descrizione"
            value={values.utente.descrizione}
            onChange={handleChange("descrizione")}
          >
            Email
          </TextField>
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"flex-end"} className={"button"}>
        <Button onClick={newRegistration} variant="contained" color={"primary"}>
          Registrati
        </Button>
      </Box>
      <Typography variant={"body1"}>Hai già un account? Accedi qui.</Typography>
    </Grid>
  );
}
