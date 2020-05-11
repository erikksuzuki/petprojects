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
import { withStyles } from "@material-ui/core/styles";
import { indigo, grey, pink, teal, red } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

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
    textField: {
      width: "80%",
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
  const [themeValue, setSelectedtheme] = useState("theme-one");
  const [contentValue, setContentvalue] = useState("");
  const [layoutState, setLayoutstate] = useState("cover");

  const updatetitle = (e) => {
    setTitlestate(e.target.value);
  };
  var contentstuff;
  const updateinnercontent = (e) => {
    contentstuff = e.target.value;
    setContentvalue(contentstuff);
    contentstuff.length > 0 ? setLayoutstate("inner") : setLayoutstate("cover");
  };
  const updatetopic = (e) => {
    setTopicstate(e.target.value);
  };
  const updatetheme = (e) => {
    setSelectedtheme(e.target.value);
  };
  const updatesubtitle = (e) => {
    setSubtitlestate(e.target.value);
  };

  const RadioOne = withStyles({
    root: {
      color: grey[900],
      "&$checked": {
        color: grey[900],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const RadioTwo = withStyles({
    root: {
      color: pink[300],
      "&$checked": {
        color: pink[300],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const RadioThree = withStyles({
    root: {
      color: red[300],
      "&$checked": {
        color: red[300],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const RadioFour = withStyles({
    root: {
      color: teal[300],
      "&$checked": {
        color: teal[300],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const RadioFive = withStyles({
    root: {
      color: indigo[300],
      "&$checked": {
        color: indigo[200],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);
  const RadioSix = withStyles({
    root: {
      color: grey[300],
      "&$checked": {
        color: grey[200],
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);

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
            title={titleState}
            subtitle={subtitleState}
            topic={topicState}
            theme={themeValue}
            content={contentValue}
            layout={layoutState}
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
                    className={classes.textField}
                    id="title"
                    label="Title"
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
                    className={classes.textField}
                    id="subtitle"
                    label="Cover subtitle"
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

                <div>
                  <br />
                  Theme color:
                  <br />
                  <RadioOne
                    checked={themeValue === "theme-one"}
                    onChange={updatetheme}
                    value="theme-one"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <RadioTwo
                    checked={themeValue === "theme-two"}
                    onChange={updatetheme}
                    value="theme-two"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "B" }}
                  />
                  <RadioThree
                    checked={themeValue === "theme-three"}
                    onChange={updatetheme}
                    value="theme-three"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "C" }}
                  />
                  <RadioFour
                    checked={themeValue === "theme-four"}
                    onChange={updatetheme}
                    value="theme-four"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "D" }}
                  />
                  <RadioFive
                    checked={themeValue === "theme-five"}
                    onChange={updatetheme}
                    value="theme-five"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "E" }}
                  />
                  <RadioSix
                    checked={themeValue === "theme-six"}
                    onChange={updatetheme}
                    value="theme-six"
                    name="radio-button-demo"
                    inputProps={{ "aria-label": "F" }}
                  />
                </div>
                <br />
                <form
                  className={classes.root}
                  noValidate
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <TextField
                    className={classes.textField}
                    id="innercontent"
                    multiline
                    label="Inner carousel page contents"
                    variant="outlined"
                    onChange={(e) => updateinnercontent(e)}
                  />
                </form>

                <Box display="flex" justifyContent="center">
                  <Button className={classes.button} variant="contained" onClick={handleSubmit}>
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
