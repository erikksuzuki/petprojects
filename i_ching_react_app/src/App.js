import React, { useState, useEffect } from "react";

import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

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
    paperTwo: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 15,
      textAlign: "center",
      color: theme.palette.text.default,
      fontSize: 12,
    },
    button: {
      marginTop: 10,
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
  const [isLoading, setLoading] = useState(true);
  const [cardstyle, setCardstyle] = useState("Clark-Gill I Ching");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCardstyle(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

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
          <Grid container spacing={1}>
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
                    <MenuItem value={"Clark-Gill I Ching"}>Clark-Gill I Ching</MenuItem>
                    <MenuItem value={"Tao Oracle"}>Tao Oracle</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" justifyContent="flex-end" style={{ marginTop: 11 }}>
                <FormControlLabel
                  className={classes.switch}
                  control={<Switch size="small" checked={checked} onChange={toggleChecked} />}
                  label="Show all lines"
                  labelPlacement="start"
                />
              </Box>
            </Grid>
          </Grid>

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

          <Box display="flex" justifyContent="center">
            <Button className={classes.button} variant="contained" onClick={() => resettimer()}>
              Generate Hexagram
            </Button>
          </Box>
        </Container>

        <Container maxWidth="sm" className="savedbox">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={classes.paperTwo}>
                <Descriptions
                  string={readingstring}
                  isloading={isLoading}
                  readingtype={readingtype}
                  cardtype={cardstyle}
                />
                <br />
                <br />
                <a
                  href="https://github.com/erikksuzuki/petprojects/blob/master/i_ching_react_app/README.md"
                  target="_blank"
                  style={{ color: "white" }}
                >
                  Version 1.00
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

export default App;
