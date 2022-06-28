import "./mainCard.css";

import { Box, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";

import bgMainCard from "../../../../assets/svg/bgMainCard.svg";
import Online from "../../Tab/container/Online";

export default function MainCard({ title, location, time, type }) {
  const stylesBG = {
    paperContainer: {
      background:
        "linear-gradient(89.92deg, rgba(0, 0, 0, 0.89) 57.94%, rgba(0, 0, 0, 0.12) 103.75%)",
    },
  };

  return (
    <Grid item xs={12} style={stylesBG.paperContainer} className={"card-main"}>
      <Grid item xs={2} className="center-center">
        <Online></Online>
      </Grid>
      <Grid item width={"200px"} minHeight={"150px"}>
        <Box marginBottom={2} marginLeft={1} marginTop={1}>
          <Box sx={{ color: "#f2f2f2" }}>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Box sx={{ color: "#909090" }}>
            {location ? (
              <Typography variant="body">Dove: {location}</Typography>
            ) : null}

            <br />
            <Typography variant="body">
              Quando: {moment(time).utc().format("DD/MM/YYYY hh:mm")}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
