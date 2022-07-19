import "../style.css";
import "./mini-card.css";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function BasicCard({ title, time }) {
  return (
    <Grid item xs={12} md={6}>
      <Box className={"mini-card"}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box color={"black"}>
              <Typography variant="h6">{title}</Typography>
              <Box color={"#808080"}>
                <Typography>
                  {moment(time).utc().format("DD/MM/YYYY hh:mm")}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
