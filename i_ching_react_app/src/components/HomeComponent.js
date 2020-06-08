import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

import Hexagram from "./Hexagram";
import Hexachange from "./Hexachange";
import Descriptions from "./Descriptions";
import FooterText from "./FooterText";

function HomeComponent(props) {
  // material ui styles for this component
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.default,
      fontSize: 13,
      backgroundImage: `url('clothbg.jpg')`,
    },
    paperTwo: {
      paddingTop: 0,
      paddingLeft: 0,
      paddingRight: 0,
      paddingBottom: 15,
      textAlign: "center",
      color: theme.palette.text.default,
      fontSize: 12,
      backgroundImage: `url('clothbg.jpg')`,
    },
    button: {
      marginTop: 10,
      backgroundColor: "#182c44",
      "&:hover": {
        background: "#182c44",
      },
      color: "white",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm">
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Paper className={classes.paper} id="contentboxone" elevation={3}>
              <Hexagram string={props.stringstate} />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper} id="contentboxtwo" elevation={3}>
              <Hexachange string={props.stringstate} />
            </Paper>
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="center" style={{ marginBottom: 12 }}>
          <Button className={classes.button} variant="contained" onClick={props.castFunction}>
            Cast Hexagram
          </Button>
        </Box>
      </Container>

      <Container maxWidth="sm" className="savedbox">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paperTwo} elevation={3}>
              <Descriptions
                string={props.readingstring}
                isloading={props.isLoading}
                readingtype={props.readingtype}
                cardstyle={props.cardstyle}
                cardstate={props.cardstate}
              />
              <FooterText />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default HomeComponent;
