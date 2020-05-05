import React from "react";
import "./App.css";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

function App() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm" className="tablecontainer">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper} id="contentboxone">
              Hexagram
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} id="contentboxtwo">
              Hexachange
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
    </div>
  );
}

export default App;
