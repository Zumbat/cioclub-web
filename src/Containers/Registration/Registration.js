import React from "react";
import RegistrationCard from "../Common/Card/RegistrationCard/index";
import { Grid } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";

export default function Registration() {
  return (
    <Grid container>
      <Grid item xs={2} />
      <StyledEngineProvider injectFirst>
        <RegistrationCard></RegistrationCard>
      </StyledEngineProvider>
    </Grid>
  );
}
