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
import TextField from "@material-ui/core/TextField";

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
  // index of swipable tabs initially set to 0
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleDate = (event) => {
    theBirthday(event.target.value);
  };
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeArrow = (newIndex) => {
    setValue(newIndex);
  };

  var userBirthday;

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

  const url = new URL(
    "https://cors-anywhere.herokuapp.com/https://api.prokerala.com/v1/astrology/planet-position"
  );

  const [planetsQuery, setPlanets] = useState(["", "", "", "", "", "", ""]);

  function getPlanets() {
    let params = {
      ayanamsa: "1",
      chart_type: "`rasi`",
      datetime: userBirthday,
      coordinates: "10.214747,78.097626",
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    // requires API token from Prokerala and CORS bypasser
    let headers = {
      Authorization: "Bearer {token}",
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
          console.log(json);
          if (json.response.planet_positions != undefined) {
            return setPlanets([
              json.response.planet_positions[0].rasi,
              json.response.planet_positions[1].rasi,
              json.response.planet_positions[2].rasi,
              json.response.planet_positions[3].rasi,
              json.response.planet_positions[4].rasi,
              json.response.planet_positions[5].rasi,
              json.response.planet_positions[6].rasi,
            ]);
          } else {
            return setPlanets(["", "", "", "", "", "", ""]);
          }
        });
    } else {
      return null;
    }
  }

  function clickthingy() {
    getPlanets();
  }

  return (
    <div className="Main">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <br />
        <br />
        <Container maxWidth="sm">
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

        <Container maxWidth="sm">
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
                    <PlanetPanel
                      planet="Sun"
                      sign={planetsQuery[0]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={1}
                    dir={theme.direction}
                  >
                    <PlanetPanel
                      planet="Moon"
                      sign={planetsQuery[1]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={2}
                    dir={theme.direction}
                  >
                    <PlanetPanel
                      planet="Mercury"
                      sign={planetsQuery[2]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={3}
                    dir={theme.direction}
                  >
                    <PlanetPanel
                      planet="Venus"
                      sign={planetsQuery[3]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={4}
                    dir={theme.direction}
                  >
                    <PlanetPanel
                      planet="Mars"
                      sign={planetsQuery[4]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={5}
                    dir={theme.direction}
                  >
                    <PlanetPanel
                      planet="Jupiter"
                      sign={planetsQuery[5]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                  <TabPanel
                    className={classes.tabPanel}
                    value={value}
                    index={6}
                    dir={theme.direction}
                  >
                    <PlanetPanel
                      planet="Saturn"
                      sign={planetsQuery[6]}
                      currenttab={value}
                      onChange={handleChangeArrow}
                    />
                  </TabPanel>
                </SwipeableViews>
                <br />
                <br />
                <a
                  href="https://github.com/erikksuzuki/petprojects/blob/master/astrology-app/README.md"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Version 0.90
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
