import React, { useState, useEffect } from "react";
import html2canvas from "html2canvas";

import Template from "./components/Template";
import "./App.css";

import { createMuiTheme, ThemeProvider, makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

import Button from "@material-ui/core/Button";
import Switch from "@material-ui/core/Switch";

function App() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.default,
      fontSize: 12,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#666",
      color: "white",
    },
    switch: {
      fontSize: 12,
      color: "#666",
      marginBottom: 10,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: "dark",
    },
  });

  useEffect(() => {
    document.title = "Jobhackr IG Generator";
  }, []);

  function generateScreenshot() {
    document.getElementById("wrapper").innerHTML = "";
    html2canvas(document.getElementById("inputarea")).then(function (canvas) {
      document.getElementById("wrapper").appendChild(canvas);
    });
  }

  const [titleState, setTitlestate] = useState("Title");
  const [subtitleState, setSubtitlestate] = useState("Subtitle");
  const [topicState, setTopicstate] = useState("Topic");

  const updatetitle = (e) => {
    setTitlestate(e.target.value);
  };
  const updatetopic = (e) => {
    setTopicstate(e.target.value);
  };
  const updatesubtitle = (e) => {
    setSubtitlestate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateScreenshot();
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div id="inputarea">
          <Template
            theme="theme-one"
            title={titleState}
            subtitle={subtitleState}
            topic={topicState}
          />
        </div>

        <Container maxWidth="lg" className="tablecontainer">
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={3}>
                <div className="container" id="wrapper"></div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={3}>
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    id="title"
                    label="Your title here"
                    variant="filled"
                    onChange={(e) => updatetitle(e)}
                  />
                </form>
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    id="subtitle"
                    label="Your subtitle"
                    variant="filled"
                    onChange={(e) => updatesubtitle(e)}
                  />
                </form>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="topic-simple">Topic</InputLabel>
                  <Select
                    native
                    value={topicState}
                    onChange={(e) => updatetopic(e)}
                    inputProps={{
                      name: "Topic",
                      id: "topic-simple",
                    }}
                  >
                    <option value="" aria-label="None" value="" />
                    <option value={"Topic: Jobhackr principles"}>Jobhackr principles</option>
                    <option value={"Topic: Landing the job"}>Landing the job</option>
                    <option value={"Topic: Surviving the workplace"}>
                      Surviving the workplace
                    </option>
                    <option value={"Topic: Advance your career"}>Advance your career</option>
                    <option value={"Topic: Job hacking frameworks"}>Job hacking frameworks</option>
                    <option value={"Topic: Questions and Answers"}>Questions and Answers</option>
                  </Select>
                </FormControl>
                <Box display="flex" justifyContent="center">
                  <Button
                    className={classes.button}
                    variant="contained"
                    onClick={generateScreenshot}
                  >
                    Render image
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
