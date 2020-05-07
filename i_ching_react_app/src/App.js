import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

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

import Descriptions from "./components/Descriptions";
//import { HEXAGRAMS } from "../shared/hexagramdetails";

import GetNumber from "./components/GetNumber";
import GetNumberChanged from "./components/GetNumberChanged";

function App() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.default,
      fontSize: 12,
    },
    button: {
      marginBottom: 10,
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

  function getRandomHexagram() {
    var flipone = flipcoins();
    var fliptwo = flipcoins();
    var flipthree = flipcoins();
    var flipfour = flipcoins();
    var flipfive = flipcoins();
    var flipsix = flipcoins();
    function flipcoins() {
      var coinvalue;
      coinvalue =
        Math.floor(Math.random() * 2) +
        2 +
        (Math.floor(Math.random() * 2) + 2) +
        (Math.floor(Math.random() * 2) + 2);
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
      return stringvalue;
    }
    return hexastring();
  }

  const [stringstate, setStringstate] = useState("VVVVVV");

  var timesrun = 0;
  function resettimer() {
    timesrun = 0;
    const interval = setInterval(() => {
      timesrun += 1;
      if (timesrun < 30) {
        setStringstate(getRandomHexagram());
      } else {
        clearInterval(interval);
      }
    }, 100);
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="sm" className="tablecontainer">
          <Button
            className={classes.button}
            fullWidth="true"
            variant="outlined"
            onClick={() => resettimer()}
          >
            Generate Hexagram
          </Button>

          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper className={classes.paper} id="contentboxone" elevation={3}>
                <Hexagram string={stringstate} />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} id="contentboxtwo" elevation={3}>
                <Hexachange string={stringstate} />
              </Paper>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="sm" className="savedbox">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Descriptions string={stringstate} readingtype="lastyin" />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
