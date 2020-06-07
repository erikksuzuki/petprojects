import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Hexagram from "./Hexagram";

import FooterText from "./FooterText";

function IntroComponent(props) {
  // material ui styles for this component
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "left",
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
      backgroundColor: "#222",
      "&:hover": {
        background: "#000",
      },
      color: "white",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Container maxWidth="sm" className="savedbox">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <h2>What is the I Ching?</h2>
              <p>
                The I Ching is a collection of practical wisdom, pertaining to every conceivable
                situation. It originates in ancient China and is the oldest Chinese classical text.
                "I Ching" means "Classic of Changes" or "Book of Changes." (While mostly the
                spelling "I Ching" is used, "Yijing" is in fact the official modern spelling.)
              </p>
              <Hexagram string="VVPPVV" className="introhex" />
              <p>
                There are 64 different main kinds of situations in the I Ching. Each one is
                indicated by a hexagram, which is a symbol made up by 6 lines, each of which can be
                broken or unbroken.
              </p>
              <p>
                To obtain advice from the I Ching about one's current situation, one can consult it
                as an oracle. A "random" hexagram is obtained, which is supposed to not be random at
                all, but to coincide with the situation. The user may hold a question in his or her
                mind when casting the hexagram.
              </p>
              <p>
                There doesn't seem to be any scientific theory that explains how this can be
                (although some people think quantum mechanics provides for a possible explanation).
                However, experience shows that it works in practice. The psychologist C.G. Jung, who
                studied the I Ching, named this coinciding of seemingly unrelated events
                "synchronicity."
              </p>
              <br />

              <h2>Interpreting the reading</h2>
              <p>
                The reading for the first hexagram indicates the basic current situation and
                immediate advice. In many readings (but not all), the first hexagram changes into a
                second hexagram, due to the fact that one or more of the lines may change from a
                Yang to a Yin (or vice versa).
              </p>
              <p>
                If this is the case, you next interpret the reading for the changing line or lines.
                These give an indication of the dynamic or changing features in the situation.
              </p>
              <p>
                Finally, you read the second hexagram. This indicates the way in which the situation
                may develop, or advice for the future. If the reading has no changing lines, you
                will have no second hexagram. This implies a situation that is fixed or static.
              </p>
              <FooterText />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default IntroComponent;
