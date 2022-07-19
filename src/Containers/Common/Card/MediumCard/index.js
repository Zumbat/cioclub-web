import "../style.css";

import { Box, Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import Online from "../../Tab/container/Online";

export default function MediumCard({ title, location, time, bgImg, type }) {
  //   const [isIscritto, setIsIscritto] = useState();

  const handleEvento = () => {
    console.log("handlingEventId");
    console.log(id, "id");

    dispatch(setSelectedEvent(id));
    console.log(useSelector(showSelectedEvent), "selector");
    navigate({
      pathname: "../event",
      search: `?id=${id}`,
    });
  };
  return (
    <Grid item md={6} xs={12}>
      <Box className={"card"} display={"flex"} alignItems={"space-between"}>
        <Grid container>
          <Grid item xs={5}>
            <Online></Online>
          </Grid>
          <Grid item xs={3}></Grid>
          <Grid item xs={3} display={"flex"} justifyContent={"flex-end"}>
            <div>
              <Typography>Iscritto</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box color={"black"}>
                  <Typography variant="h6">{title}</Typography>
                  <Box color={"#808080"}>
                    <Typography>{location}</Typography>
                    <br />
                    <Typography>
                      {moment(time).utc().format("DD/MM/YYYY hh:mm")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box className={"bottom-center"} sx={{ padding: "20px" }}>
                  <Button onClick={handleEvento}>
                    <Typography variant="body2">Mostra di più</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
}
