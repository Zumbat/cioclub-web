import React from "react";
import LoginCard from "../Common/Card/LoginCard/index";
import { Grid } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";

export default function Login() {
  return (
    <Grid container>
      <Grid item xs={2} />
      <StyledEngineProvider injectFirst>
        <LoginCard></LoginCard>
      </StyledEngineProvider>
    </Grid>
  );
}
