import { Box, Grid, IconButton, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./Dashboard";
import profile from "../../assets/svg/profile.svg";
import { getEventAsync, showEvent } from "../../features/eventSlice";
import {
  getPartecipazioniAsync,
  showPartecipazioni,
} from "../../features/partecipazioniSlice";
import BasicCard from "../Common/Card/BasicCard";
import MainCard from "../Common/Card/MainCard";
import MediumCard from "../Common/Card/MediumCard";
import MiniCard from "../Common/Card/MiniCard";
import moment from "moment";
import "./Dashboard.css";
import { setSelectedEvent } from "../../features/selectedEventSlice";

function Dashboard(params) {
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    console.log(localStorage.getItem("token"), "logout");
    navigate({
      pathname: "../login",
    });
  };

  // const handleEvento = (item) => {
  //   console.log("item id", item);
  //   dispatch(setSelectedEvent(item));
  //   navigate({
  //     pathname: "../event",
  //     search: `?idEvent=${item}`,
  //   });
  // };
  const event = useSelector(showEvent);
  const partecipazioni = useSelector(showPartecipazioni);
  console.log(event.listEventi[0].idEvento, "fdsadw");
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
    <Grid container spacing={2} className={"center-center dash"}>
      <Grid item xs={7}>
        <Box>
          <Typography variant="h3">Dashboard</Typography>
          <Typography color="#707070">Gestisci i tuoi eventi</Typography>
        </Box>
      </Grid>

      <Grid item xs={1}>
        <Box>
          <IconButton aria-label="delete" onClick={handleClick}>
            <img src={profile} alt="profile" />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
            {/* <MenuItem onClick={handleDeleteAccount}>
              <Typography color={"error"}>Elimina il mio account</Typography>
            </MenuItem> */}
          </Menu>
        </Box>
      </Grid>
      <Grid item xs={8}>
        <Grid container spacing={2} sx={{ position: "relative", zIndex: "1" }}>
          <Grid
            item
            xs={12}
            sx={{ position: "relative", zIndex: "1", marginTop: "30px" }}
          >
            <Box sx={{ color: "black" }}>
              <Typography variant="h5" className={"title"}>
                Prossimi eventi
              </Typography>
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
                id={event.listEventi[0].idEvento}
                type={event.listEventi[0].isOnline}
                sub={
                  event.listEventi[0].idEvento == partecipazioni.listEventi
                    ? true
                    : false
                }
                // key={event.listEventi[0].idEvento}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative", zIndex: "5" }}>
            <Grid container spacing={2}>
              {event.listEventi.slice(1).map((item, key) => {
                if (
                  partecipazioni.listEventi.filter(
                    (element) => element.idEvento == item.idEvento
                  ).length > 0
                ) {
                  return (
                    <BasicCard
                      title={item.nome}
                      location={item.indirizzo}
                      time={item.data}
                      id={item.idEvento}
                      sub={true}
                      key={key}
                      type={item.isOnline}
                    />
                  );
                } else {
                  return (
                    <BasicCard
                      title={item.nome}
                      location={item.indirizzo}
                      time={item.data}
                      id={item.idEvento}
                      sub={false}
                      key={key}
                      type={item.isOnline}
                    />
                  );
                }
              })}
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative", zIndex: "10" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "30px" }}>
                <Typography variant={"h5"} className={"title"}>
                  Partecipazioni
                </Typography>
              </Grid>
              {partecipazioni.listEventi.map((item, key) => (
                <MediumCard
                  title={item.nome}
                  location={item.indirizzo}
                  time={item.data}
                  id={item.idEvento}
                  key={key}
                />
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} sx={{ position: "relative", zIndex: "15" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{ marginTop: "30px" }}>
                <Typography variant={"h5"} className={"title"}>
                  Archivio eventi
                </Typography>
              </Grid>
              {partecipazioni.listEventi.map((item, key) => {
                if (moment().isBefore(moment(item.data))) {
                  return (
                    <MiniCard title={item.nome} time={item.data} key={key} />
                  );
                }
              })}
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
