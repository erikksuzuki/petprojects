import React, { useState, useEffect } from "react";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import PlanetPanel from "./PlanetPanel";

import FooterText from "./FooterText";

function HomePage(props) {
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
  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleChangeArrow = (newIndex) => {
    setValue(newIndex);
  };

  const planetsQuery = props.planetsQuery;

  return (
    <div className="Main">
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
                    sign={planetsQuery[0].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
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
                    sign={planetsQuery[1].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
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
                    sign={planetsQuery[2].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
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
                    sign={planetsQuery[3].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
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
                    sign={planetsQuery[4].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
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
                    sign={planetsQuery[5].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
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
                    sign={planetsQuery[6].rasi}
                    currenttab={value}
                    onChange={handleChangeArrow}
                    planetsQuery={planetsQuery}
                    isFetching={props.isFetching}
                  />
                </TabPanel>
              </SwipeableViews>
              <FooterText />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomePage;
