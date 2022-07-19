import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showEvent } from "../../features/eventSlice";
import {
  showSelectedEvent,
  setSelectedEvent,
} from "../../features/selectedEventSlice";
import { getEventAsync } from "../../features/eventSlice";
import { Grid, Typography, IconButton } from "@material-ui/core";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Event() {
  const id = useSelector(showSelectedEvent);
  const event = useSelector(showEvent);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!event.listEventi[0].idEvento) {
      dispatch(getEventAsync());
      dispatch(setSelectedEvent());
    }
  }, []);

  const handleSub = () => {
    dispatch(sendAttendAsync(i));
  };

  console.log(id.id, "id.id");
  console.log(id, "id");
  console.log(event);
  console.log(event.listEventi, "idEvento");
  console.log(thisEvent);

  const thisEvent = event.listEventi.find((element) => element.idEvento == id);
  return (
    event.listEventi[0].idEvento && (
      <div className={"center-center dash"}>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <IconButton aria-label="go back">
                  <ArrowBackIcon></ArrowBackIcon>
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                {thisEvent?.imgCopertina}
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"h5"}>{thisEvent?.nome}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant={"body"}>
                  {thisEvent?.descrizione}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Grid container>
              <Grid item xs={12}>
                <Button onClick={handleSub} variant={"contained"}>
                  Iscriviti
                </Button>
              </Grid>
              <Grid item xs={12}>
                <div className="card">data {thisEvent?.data}</div>
              </Grid>
              <Grid item xs={12}>
                <div className="card">indirizzo {thisEvent?.indirizzo}</div>
              </Grid>
              <Grid item xs={12}>
                <div className="card">status {thisEvent?.status}</div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    )
  );
}
