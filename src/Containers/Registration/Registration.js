import React from "react";
import RegistrationCard from "../Common/Card/RegistrationCard/index";
import { Grid } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";
import "../../main.css";

export default function Registration() {
  return (
    <main className="container">
      <Grid container className="center-center">
        <StyledEngineProvider injectFirst>
          <RegistrationCard></RegistrationCard>
        </StyledEngineProvider>
      </Grid>
    </main>
  );
}
