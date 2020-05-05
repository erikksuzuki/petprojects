import React from "react";
import "./App.css";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Hexagram from "./components/Hexagram";
import Hexachange from "./components/Hexachange";

var flipone = flipcoins();
var fliptwo = flipcoins();
var flipthree = flipcoins();
var flipfour = flipcoins();
var flipfive = flipcoins();
var flipsix = flipcoins();

var timeout;
var t = 0;
var randomtime;

function flipcoins() {
  var coinvalue;
  coinvalue =
    Math.floor(Math.random() * 2) +
    2 +
    (Math.floor(Math.random() * 2) + 2) +
    (Math.floor(Math.random() * 2) + 2);
  console.log("coinvalue = " + coinvalue);
  return coinvalue;
}

function drawline(coinvalue) {
  var line;
  if (coinvalue == 6) {
    line = "B";
  }
  if (coinvalue == 7) {
    line = "V";
  }
  if (coinvalue == 8) {
    line = "P";
  }
  if (coinvalue == 9) {
    line = "W";
  }
  console.log("drawline = " + line);
  return line;
}

function hexastring() {
  var stringvalue;
  stringvalue =
    drawline(flipone) +
    drawline(fliptwo) +
    drawline(flipthree) +
    drawline(flipfour) +
    drawline(flipfive) +
    drawline(flipsix);
  console.log("hexastring = " + stringvalue);
  return stringvalue;
}

function App() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.default,
    },
  }));

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const classes = useStyles();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" className="tablecontainer">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper className={classes.paper} id="contentboxone" elevation={3}>
                <Hexagram string={hexastring()} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} id="contentboxtwo" elevation={3}>
                <Hexachange string={hexastring()} />
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="sm" className="savedbox">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Saved Hexagram</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>Saved Hexachange</Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
