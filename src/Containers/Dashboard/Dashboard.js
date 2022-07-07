import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import profile from "../../assets/svg/profile.svg";
import { getEventAsync, showEvent } from "../../features/eventSlice";
import {
  getPartecipazioniAsync,
  showPartecipazioni,
} from "../../features/partecipazioniSlice";
import BasicCard from "../Common/Card/BasicCard";
import MainCard from "../Common/Card/MainCard";
import MediumCard from "../Common/Card/MediumCard";

function Dashboard(params) {
  const dispatch = useDispatch();

  const event = useSelector(showEvent);
  const partecipazioni = useSelector(showPartecipazioni);

  useEffect(() => {
    dispatch(getEventAsync());
    dispatch(getPartecipazioniAsync());
  }, []);

  const styles = {
    paperContainer: {
      background: `url("https://www.fillmurray.com/640/360")`,
    },
  };

  return (
    <Grid container spacing={2} className={"center-center"}>
      <Grid item xs={7}>
        <Box>
          <Typography variant="h3">Dashboard</Typography>
          <Typography color="#707070">Gestisci i tuoi eventi</Typography>
        </Box>
      </Grid>

      <Grid item xs={1}>
        <Box>
          <IconButton aria-label="delete">
            <img src={profile} alt="profile" />
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2} sx={{ position: "relative", zIndex: "1" }}>
          <Grid item xs={12} sx={{ position: "relative", zIndex: "1" }}>
            <Box sx={{ color: "black" }}>
              <Typography variant="h5">Prossimi eventi</Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "15px",
                boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
                zIndex: "1",
              }}
              style={styles.paperContainer}
            >
              <MainCard
                title={event.listEventi[0].nome}
                location={event.listEventi[0].indirizzo}
                time={event.listEventi[0].data}
                key={event.listEventi[0].idEvento}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative", zIndex: "5" }}>
            <Grid
              container
              spacing={2}
              sx={{ position: "relative", zIndex: "5" }}
            >
              {event.listEventi.slice(1).map((item, key) => (
                <BasicCard
                  title={item.nome}
                  location={item.indirizzo}
                  time={item.data}
                  key={key}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative", zIndex: "10" }}>
            <Grid
              container
              spacing={2}
              sx={{ position: "relative", zIndex: "10" }}
            >
              <Grid item xs={12}>
                <Typography variant={"h5"}>Partecipazioni</Typography>
              </Grid>
              {partecipazioni.listEventi.map((item, key) => (
                <MediumCard
                  title={item.nome}
                  location={item.indirizzo}
                  time={item.data}
                  key={key}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box>
        <Typography></Typography>
      </Box>
    </Grid>
  );
}

export default Dashboard;
