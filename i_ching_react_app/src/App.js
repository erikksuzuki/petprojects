import React, { useState, useEffect } from "react";
import "./App.css";

import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Box from "@material-ui/core/Box";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Hexagram from "./components/Hexagram";
import Hexachange from "./components/Hexachange";
import Descriptions from "./components/Descriptions";

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
    let line;
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
    switch: {
      fontSize: 12,
      color: "#666",
      marginBottom: 10,
    },
  }));
  const classes = useStyles();
  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  const [stringstate, setStringstate] = useState("VVVVVV");
  const [readingstring, setReadingstring] = useState("VVVVVV");
  const [readingtype, setReadingtype] = useState(false);
  const [checked, setChecked] = useState(false);

  function resettimer() {
    var timesrun = 0;
    var randomtime = Math.floor(Math.random() * 15) + 10;
    var thisString;
    const interval = setInterval(() => {
      timesrun += 1;
      if (timesrun < randomtime) {
        thisString = getRandomHexagram();
        setStringstate(thisString);
        console.log("this current permutation is: " + thisString);
      } else {
        clearInterval(interval);
        console.log("the final state state is: " + thisString);
        setReadingstring(thisString);
      }
    }, 100);
  }

  const toggleChecked = () => {
    setChecked((prev) => !prev);
    setReadingtype((prev) => !prev);
  };

  useEffect(() => {
    document.title = "I Ching App";
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="sm" className="tablecontainer">
          <Box display="flex" justifyContent="flex-end">
            <FormControlLabel
              className={classes.switch}
              control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
              label="Show all changing lines"
              labelPlacement="start"
            />
          </Box>
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
                <Descriptions string={readingstring} readingtype={readingtype} />
                <br />
                <br />
                Version 0.6 - by Eric Suzuki
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
