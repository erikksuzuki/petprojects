import React, { useState } from "react";

import { Switch, Route, Redirect, Link } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import HomeIcon from "@material-ui/icons/Home";
import HelpIcon from "@material-ui/icons/Help";
import InfoIcon from "@material-ui/icons/Info";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import Hidden from "@material-ui/core/Hidden";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SwitchToggle from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

import HomeComponent from "./HomeComponent";
import IntroComponent from "./IntroComponent";
import AboutComponent from "./AboutComponent";

function MainComponent() {
  const useStyles = makeStyles((theme) => ({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#222",
      "&:hover": {
        background: "#000",
      },
      color: "white",
    },
    menuButton: {
      marginLeft: 30,
      marginRight: 30,
    },
    switch: {
      fontSize: 12,
      color: `rgba(255,255,255,0.7)`,
      marginBottom: 10,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    list: {
      width: 250,
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

  // data and methods for card selector
  const [open, setOpen] = useState(false);
  const [cardstyle, setCardstyle] = useState("Scarabeo Cards");
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setCardstyle(event.target.value);
  };

  // data and methods for reading type
  const [checked, setChecked] = useState(false);
  const [readingtype, setReadingtype] = useState(false);
  const toggleChecked = () => {
    setChecked((prev) => !prev);
    setReadingtype((prev) => !prev);
  };
  const switchlabel = () => (checked ? "Show all lines" : "Prevailing line");

  // data and methods for random hexagram
  const [stringstate, setStringstate] = useState("VVVVVV");
  const [readingstring, setReadingstring] = useState("VVVVVV");
  const [isLoading, setLoading] = useState(true);
  function getRandomHexagram() {
    const flipcoins = () => {
      return (
        Math.floor(Math.random() * 2) +
        2 +
        (Math.floor(Math.random() * 2) + 2) +
        (Math.floor(Math.random() * 2) + 2)
      );
    };
    const drawline = (coinvalue) => {
      let line = {
        6: "B",
        7: "V",
        8: "P",
        9: "W",
      };
      return line[coinvalue];
    };
    return (
      drawline(flipcoins()) +
      drawline(flipcoins()) +
      drawline(flipcoins()) +
      drawline(flipcoins()) +
      drawline(flipcoins()) +
      drawline(flipcoins())
    );
  }
  function resettimer() {
    var timesrun = 0;
    var randomtime = Math.floor(Math.random() * 15) + 10;
    var thisString;
    setLoading(true);
    const interval = setInterval(() => {
      timesrun += 1;
      if (timesrun < randomtime) {
        thisString = getRandomHexagram();
        setStringstate(thisString);
      } else {
        clearInterval(interval);
        setReadingstring(thisString);
        setLoading(false);
      }
    }, 100);
  }
  const handleCast = () => {
    resettimer();
  };

  return (
    <div className="App">
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
              style={{ marginRight: 30 }}
              style={{ cursor: "default" }}
            >
              I Ching
            </Typography>
            <Hidden smDown>
              <Link to="/home" style={{ color: "#fff" }}>
                <Button color="inherit" className={classes.menuButton} startIcon={<HomeIcon />}>
                  Home
                </Button>
              </Link>
              <Link to="/intro" style={{ color: "#fff" }}>
                <Button color="inherit" className={classes.menuButton} startIcon={<HelpIcon />}>
                  Introduction
                </Button>
              </Link>
              <Link to="/about" style={{ color: "#fff" }}>
                <Button color="inherit" className={classes.menuButton} startIcon={<InfoIcon />}>
                  About this project
                </Button>
              </Link>
            </Hidden>
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
            <Typography variant="h6" className={classes.title} style={{ marginRight: 30 }}>
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
              <Link to="/intro" style={{ textDecoration: "none", color: "#fff" }}>
                <ListItem button key="left">
                  <ListItemIcon>
                    <HelpIcon />
                  </ListItemIcon>
                  <ListItemText primary="Introduction" />
                </ListItem>
              </Link>
              <Link to="/about" style={{ textDecoration: "none", color: "#fff" }}>
                <ListItem button key="left">
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="About this project" />
                </ListItem>
              </Link>
            </List>
          </div>
        </Drawer>

        <Container maxWidth="sm" style={{ marginTop: 20 }}>
          <Grid container spacing={1} style={{ paddingTop: 45 }}>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="flex-start">
                <FormControl className={classes.formControl} style={{ marginLeft: 0 }}>
                  <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={cardstyle}
                    onChange={handleChange}
                    style={{ color: "#888" }}
                  >
                    <MenuItem value={"Clark-Gill Cards"}>Clark-Gill Cards</MenuItem>
                    <MenuItem value={"Tao Oracle Cards"}>Tao Oracle Cards</MenuItem>
                    <MenuItem value={"Scarabeo Cards"}>Scarabeo Cards</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="flex-end" style={{ marginTop: 11 }}>
                <FormControlLabel
                  className={classes.switch}
                  control={<SwitchToggle size="small" checked={checked} onChange={toggleChecked} />}
                  label={switchlabel()}
                  labelPlacement="start"
                />
              </Box>
            </Grid>
          </Grid>
        </Container>

        <Switch>
          <Route
            exact
            path="/home"
            component={() => (
              <HomeComponent
                cardstyle={cardstyle}
                readingtype={readingtype}
                stringstate={stringstate}
                isLoading={isLoading}
                readingstring={readingstring}
                castFunction={handleCast}
                cardstate={open}
              />
            )}
          />
          <Route path="/intro" component={() => <IntroComponent />} />
          <Route path="/about" component={() => <AboutComponent />} />
          <Redirect to="/home" />
        </Switch>
      </ThemeProvider>
    </div>
  );
}

export default MainComponent;
