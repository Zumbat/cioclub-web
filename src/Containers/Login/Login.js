import React from "react";
import LoginCard from "../Common/Card/LoginCard/index";
import { Grid } from "@material-ui/core";
import { StyledEngineProvider } from "@mui/material/styles";
import "../../main.css";
// import "../../Containers/Common/Card/style.css";

export default function Login() {
  return (
    <main className="container">
      <Grid container className="center-center">
        <StyledEngineProvider injectFirst>
          <LoginCard></LoginCard>
        </StyledEngineProvider>
      </Grid>
    </main>
  );
}
