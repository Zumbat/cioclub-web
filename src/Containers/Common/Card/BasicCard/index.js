import "../style.css";

import { Box, Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Online from "../../Tab/container/Online";

export default function BasicCard({ title, location, time, bgImg, type }) {
  const [isIscritto, setIsIscritto] = useState();
  return (
    <Grid item md={4} xs={12}>
      <Box className={"card"} display={"flex"} alignItems={"space-between"}>
        <Grid container>
          <Grid item xs={5}>
            <Online></Online>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3} display={"flex"} justifyContent={"flex-end"}>
            <Button onClick={() => setIsIscritto(!isIscritto)}>
              {isIscritto ? "Iscritto" : "Iscriviti"}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box color={"black"}>
                  <Typography variant="h6">{title}</Typography>
                  <Box color={"#808080"}>
                    <Typography variant="body">{location}</Typography>
                    <br />
                    <Typography variant="body">
                      {moment(time).utc().format("DD/MM/YYYY hh:mm")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"flex-end"}
                  sx={{ paddingTop: "40px" }}
                >
                  <Typography variant="body2">Mostra di più</Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
