import React, { useState, useEffect } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Button from "@material-ui/core/Button";

import PlanetPanel from "./PlanetPanel";

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
    button: {
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: "#222",
      "&:hover": {
        background: "#000",
      },
      color: "white",
    },
    switch: {
      fontSize: 12,
      color: "#888",
      marginBottom: 10,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    tabPanel: {
      fontSize: 12,
    },
  }));
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const url = new URL("https://api.prokerala.com/v1/astrology/planet-position");

  const [planetsQuery, setPlanets] = useState(["", "", "", "", "", "", ""]);

  function getPlanets() {
    let params = {
      ayanamsa: "1",
      chart_type: "`rasi`",
      datetime: "1990-09-12T15:19:21+00:00",
      coordinates: "10.214747,78.097626",
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    // requires API token from Prokerala and CORS bypasser
    let headers = {
      Authorization: "Bearer {token}",
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then(function (json) {
        console.log(json);
        setPlanets([
          json.response.planet_positions[0].rasi,
          json.response.planet_positions[1].rasi,
          json.response.planet_positions[2].rasi,
          json.response.planet_positions[3].rasi,
          json.response.planet_positions[4].rasi,
          json.response.planet_positions[5].rasi,
          json.response.planet_positions[6].rasi,
        ]);
      });
  }

  function clickthingy() {
    getPlanets();
  }

  return (
    <div className="Main">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="sm" className="tablecontainer">
          <Box display="flex" justifyContent="center">
            <Button className={classes.button} variant="contained" onClick={clickthingy}>
              Fetch Horoscope Data
            </Button>
          </Box>
        </Container>

        <Container maxWidth="sm" className="savedbox">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paperTwo} elevation={3}>
                <AppBar position="static" color="default">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                  >
                    <Tab label="Q" {...a11yProps(0)} />
                    <Tab label="R" {...a11yProps(1)} />
                    <Tab label="S" {...a11yProps(2)} />
                    <Tab label="T" {...a11yProps(3)} />
                    <Tab label="U" {...a11yProps(4)} />
                    <Tab label="V" {...a11yProps(5)} />
                    <Tab label="W" {...a11yProps(6)} />
                  </Tabs>
                </AppBar>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={0}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Sun" sign={planetsQuery[0]} />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={1}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Moon" sign={planetsQuery[1]} />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={2}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Mercury" sign={planetsQuery[2]} />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={3}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Venus" sign={planetsQuery[3]} />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={4}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Mars" sign={planetsQuery[4]} />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={5}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Jupiter" sign={planetsQuery[5]} />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={6}
                    dir={theme.direction}
                  >
                    <PlanetPanel planet="Saturn" sign={planetsQuery[6]} />
                  </TabPanel>
                </SwipeableViews>
                <header>This is the beginning of something beautiful</header>
                <br />
                <br />
                <a href="#" target="_blank" style={{ color: "white" }}>
                  Version 0.05
                </a>{" "}
                - by Eric Suzuki
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default MainComponent;
