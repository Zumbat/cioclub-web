import "../style.css";
import "../MainCard/mainCard.css";
import { Box, Button, Grid, Typography } from "@material-ui/core";
import moment from "moment";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Online from "../../Tab/container/Online";
import {
  setSelectedEvent,
  showSelectedEvent,
} from "../../../../features/selectedEventSlice";
import { showPartecipazioni } from "../../../../features/partecipazioniSlice";
import DalVivo from "../../Tab/container/DalVivo";

export default function BasicCard({ title, location, time, id, sub, type }) {
  const [isIscritto, setIsIscritto] = useState();

  // isIscritto == event.listEventi.find((element) => element.idEvento == showPartecipazioni.listEventi.idEvento)
  let navigate = useNavigate();
  const dispatch = useDispatch();

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
    <Grid item xs={12} md={4}>
      <Box className={"card center-center"}>
        <Grid
          container
          spacing={3}
          sx={{
            minHeight: "200px",
            maxHeight: "200px",
          }}
        >
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
            <Typography>{sub ? "Iscritto" : "Iscriviti"}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Box color={"black"}>
                  <Typography variant="h6" noWrap>
                    {title}
                  </Typography>
                  <Box color={"#808080"}>
                    <Typography noWrap>
                      {location ? location : <br />}
                    </Typography>

                    <Typography noWrap>
                      {moment(time).utc().format("DD/MM/YYYY hh:mm")}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
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
      </Box>
    </Grid>
  );
}
