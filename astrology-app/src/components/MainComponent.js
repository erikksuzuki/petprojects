import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";

//navigation bar and links
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tooltip from "@material-ui/core/Tooltip";

import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";

import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import Button from "@material-ui/core/Button";

import { apikey } from "../shared/apikey";
import HomePage from "./HomePage";

function MainComponent() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.default,
      fontSize: 12,
    },
    paperTwo: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 15,
      textAlign: "center",
      color: theme.palette.text.default,
      backgroundColor: "rgba(0,0,0,0.3)",
      fontSize: 12,
    },
    menuButton: {
      marginLeft: 30,
      marginRight: 30,
    },
    switch: {
      fontSize: 12,
      color: "#888",
      marginBottom: 10,
    },
    button: {
      color: "white",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    tabPanel: {
      fontSize: 12,
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  // data and methods for mobile menu drawer
  const [drawerState, setDrawerState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerState({ ...drawerState, [anchor]: open });
  };

  // data and methods for horoscope data
  const [planetsQuery, setPlanets] = useState(["", "", "", "", "", "", ""]);
  const [isFetching, setFetchstate] = useState(false);
  const handleDate = (event) => {
    theBirthday(event.target.value);
  };
  const url = new URL(apikey[0]);
  let userBirthday;
  function getPlanets() {
    setPlanets(["", "", "", "", "", "", ""]);
    setFetchstate(true);
    console.log("start fetch");
    let params = {
      ayanamsa: "1",
      chart_type: "`rasi`",
      datetime: userBirthday,
      coordinates: "10.214747,78.097626",
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));
    // requires API token from Prokerala and CORS bypasser
    let headers = {
      Authorization: apikey[1],
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    if (userBirthday != undefined) {
      fetch(url, {
        method: "GET",
        headers: headers,
      })
        .then((response) => response.json())
        .then(function (json) {
          console.log("fetched");
          if (json.response.planet_positions != undefined) {
            setFetchstate(false);
            setPlanets([
              json.response.planet_positions[0],
              json.response.planet_positions[1],
              json.response.planet_positions[2],
              json.response.planet_positions[3],
              json.response.planet_positions[4],
              json.response.planet_positions[5],
              json.response.planet_positions[6],
            ]);
          } else {
            setPlanets(["", "", "", "", "", "", ""]);
          }
        });
    } else {
      return null;
    }
  }

  // data and methods for fetch data appearance
  const [fetchbuttonClass, setButtonclass] = useState("fetchbuttonDisabled");
  function theBirthday(date) {
    userBirthday = date + "T12:00:00+00:00";
    console.log(date);
    if (date !== undefined && date !== "") {
      console.log(date);
      setButtonclass("fetchbutton");
    } else {
      setButtonclass("fetchbuttonDisabled");
    }
  }
  function clickthingy() {
    getPlanets();
  }

  return (
    <div className="Main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} style={{ backgroundColor: "#000" }}>
          <Toolbar>
            <Hidden mdUp>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon />
              </IconButton>
            </Hidden>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ marginRight: 30, cursor: "default" }}
              component={"span"}
            >
              Vedic Astrology
            </Typography>
            <Hidden smDown>
              <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
                <Button color="inherit" className={classes.menuButton} startIcon={<HomeIcon />}>
                  Home
                </Button>
              </Link>
              <Link to="/intro" style={{ textDecoration: "none", color: "#fff" }}>
                <Tooltip title="Coming soon.">
                  <Button color="inherit" className={classes.menuButton} startIcon={<HelpIcon />}>
                    Introduction
                  </Button>
                </Tooltip>
              </Link>

              <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
                <Tooltip title="Coming soon.">
                  <Button color="inherit" className={classes.menuButton} startIcon={<InfoIcon />}>
                    About this project
                  </Button>
                </Tooltip>
              </Link>
            </Hidden>
            <img src="/cards/back.jpg" alt="" style={{ width: 1, height: 1, opacity: 0.01 }} />
          </Toolbar>
        </AppBar>
        <Drawer anchor="left" open={drawerState["left"]} onClose={toggleDrawer("left", false)}>
          <Toolbar
            style={{ backgroundColor: "#000", boxShadow: `0px 2px 5px 0px rgba(0, 0, 0, 0.3)` }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer("left", false)}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              className={classes.title}
              style={{ marginRight: 30 }}
              component={"span"}
            >
              I Ching
            </Typography>
          </Toolbar>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
          >
            <List>
              <Link to="/home" style={{ textDecoration: "none", color: "#fff" }}>
                <ListItem button key="left">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
              </Link>
              <Tooltip title="Coming soon.">
                <Link to="/intro" style={{ textDecoration: "none", color: "#fff" }}>
                  <ListItem button key="left">
                    <ListItemIcon>
                      <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Introduction" />
                  </ListItem>
                </Link>
              </Tooltip>
              <Tooltip title="Coming soon.">
                <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
                  <ListItem button key="left">
                    <ListItemIcon>
                      <InfoIcon />
                    </ListItemIcon>
                    <ListItemText primary="About this project" />
                  </ListItem>
                </Link>
              </Tooltip>
            </List>
          </div>
        </Drawer>

        <Container maxWidth="sm" style={{ marginTop: 80 }}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paperTwo} elevation={3}>
                <br />
                <form className={classes.container} noValidate>
                  <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    className={classes.textField}
                    onChange={handleDate}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="sm">
          <Box display="flex" justifyContent="center">
            <Button className={fetchbuttonClass} variant="contained" onClick={clickthingy}>
              {fetchbuttonClass == "fetchbutton" ? "Fetch Horoscope Data" : "Enter Birth Date"}
            </Button>
          </Box>
        </Container>

        <Switch>
          <Route
            path="/home"
            component={() => <HomePage planetsQuery={planetsQuery} isFetching={isFetching} />}
          />
          <Redirect to="/home" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default MainComponent;
