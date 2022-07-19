import "./mainCard.css";

import { Box, Grid, Typography, Button } from "@material-ui/core";
import moment from "moment";
import React from "react";

import bgMainCard from "../../../../assets/svg/bgMainCard.svg";
import Online from "../../Tab/container/Online";
import DalVivo from "../../Tab/container/DalVivo";

export default function MainCard({ title, location, time, type, sub }) {
  const stylesBG = {
    paperContainer: {
      background:
        "linear-gradient(89.92deg, rgba(0, 0, 0, 0.89) 57.94%, rgba(0, 0, 0, 0.12) 103.75%)",
    },
  };

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
    <Grid
      item
      xs={12}
      style={stylesBG.paperContainer}
      className={"card-main"}
      sx={{ zIndex: "-1" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={5}>
          {type ? <Online /> : <DalVivo />}
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              height: "25px",
              width: "fitContent",
              paddingX: "10px",
            }}
          >
            <Typography>{sub ? "Iscritto" : "Iscriviti"}</Typography>
          </Box>
        </Grid>
        <Grid item width={"200px"} minHeight={"150px"}>
          <Box marginBottom={2} marginTop={1}>
            <Box sx={{ color: "#f2f2f2" }}>
              <Typography variant="h5">{title}</Typography>
            </Box>
            <Box sx={{ color: "#909090" }}>
              {location ? <Typography>{location}</Typography> : null}

              <br />
              <Typography>
                {moment(time).utc().format("DD/MM/YYYY hh:mm")}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box className="bottom-center">
          <Button onClick={handleEvento}>
            <Typography variant="body2">Mostra di più</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
