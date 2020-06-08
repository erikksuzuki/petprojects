import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Gist from "super-react-gist";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import FooterText from "./FooterText";

function AboutComponent(props) {
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
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  const classes = useStyles();

  useEffect(() => {
    props.startFunction();
  });

  return (
    <div>
      <Container maxWidth="sm" className="savedbox">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
              <h2>About this Project</h2>
              <p>
                This work is non-commercial and intended for personal and educational use. The first
                of my original programming projects using modern Javascript libraries, it presented
                several coding challenges, a few of which I describe below.
              </p>
              <h3>Method of divination:</h3>
              <div className="aboutlinks">
                <p>
                  This web application uses the coin toss method of consulting the I Ching, in which
                  three coins are tossed to obtain a random value. Traditionally, "tails" are given
                  a value of 2 while "heads" are given a value of 3 per coin. Tossing the three
                  coins together gives the diviner a total value of 6, 7, 8 or 9, each value
                  corresponding to type of "changing" or "unchanging" line respectively.
                </p>
                <p>
                  When repeated, the diviner is able to produce the 6 lines that comprise a
                  hexagram. More can be read about this method on{" "}
                  <a
                    href="https://www.wikihow.com/Consult-the-I-Ching-Using-3-Coins"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Wikihow
                  </a>
                  . Programmatically, I chose to represent these permutations as W (white, or yang)
                  and B (black, or yin). I chose P and V to represent their unchanging counterparts
                  due to their similarity in appearance.
                </p>
              </div>
              <div className="codecontainer">
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Coin toss algorithm</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Gist url="https://gist.github.com/erikksuzuki/dc5530a422eefe069e48366c2074d35e" />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
              <br />
              <h3>Deriving the Hexagram Numbers:</h3>
              <p>
                The string obtained from method above is passed as an argument to a function called{" "}
                <b>GetNumbers</b>, which converts the 4-letter string to its binary changing and{" "}
                non-changing forms and gives us the Hexagram numbers for both in an object.
              </p>
              <p>
                These numbers can be used to render the card images, to filter the descriptions, and{" "}
                for comparison to check whether the hexagram has a transformed image.
              </p>
              <div className="codecontainer">
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Get hexagram numbers</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Gist url="https://gist.github.com/erikksuzuki/fec8ebcecd12143b76e9751bd7e380f3" />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>
              <br />
              <h3>Choosing the prevailing line:</h3>
              <p>
                According to <b>Alfred Huang</b>, author of <i>The Numerology of the I Ching</i> and
                the bestselling <i>The Complete I Ching</i>, <b>Master Yin</b> handed down these
                rules for interpretation when there is more than one changing line.
              </p>
              <ol>
                <li>
                  If there are two changing lines—one yin and the other yang—consult only the yin
                  changing line.
                </li>
                <li>If the two changing lines are both yin or both yang, consult the lower one.</li>
                <li>If there are three changing lines, consult only the middle one.</li>
                <li>
                  If there are four changing lines, consult only the upper of the two non-changing
                  lines.
                </li>
                <li>
                  If there are five changing lines, consult only the other, non-changing line.
                </li>
                <li>
                  If six lines are all changing, consult the Decision of the new gua, the approached
                  gua.
                </li>
              </ol>
              <div className="codecontainer">
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Master Yin algorithm</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Gist url="https://gist.github.com/erikksuzuki/713e3f1725e10092945da6580cd8afc9" />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              </div>

              <br />
              <h3>Resources:</h3>
              <p>
                Here are some of the resources that made this project possible in its current form.
              </p>
              <div className="aboutlinks">
                <ul>
                  <li>
                    This single-page application uses{" "}
                    <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                      React.js
                    </a>{" "}
                    and{" "}
                    <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">
                      Material UI
                    </a>{" "}
                    for its Javascript library and UI.
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=OV8MVmtgmoY"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      CSS Flip Card Effect
                    </a>{" "}
                    by Arjun Khara was a tutorial I found on YouTube for creating the animation seen
                    in the readings.
                  </li>

                  <li>
                    <a
                      href="https://www.npmjs.com/package/super-react-gist"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Super React Gist
                    </a>{" "}
                    by George Gkasdrogkas and{" "}
                    <a
                      href="https://lonekorean.github.io/gist-syntax-themes/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Gist Syntax Themes
                    </a>{" "}
                    by Will Boyd enabled the displaying of code on this page.
                  </li>
                  <li>
                    <a
                      href="https://github.com/VincentGarreau/particles.js/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      particle.js
                    </a>{" "}
                    by Vincent Garreau was used for the cave dust background effect. You can find
                    and copy the parameters I used{" "}
                    <a
                      href="https://gist.github.com/erikksuzuki/32e773c4a60156bc9be89f80f6ec8463"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      here
                    </a>
                    .
                  </li>
                  <li>
                    <a
                      href="https://www.jquery-backstretch.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      jQuery backstretch
                    </a>{" "}
                    by Scott Robbin is still the easiest way to create fixed backgrounds that work
                    in any mobile browser.
                  </li>
                  <li>
                    The{" "}
                    <a
                      href="https://www.gettyimages.com/detail/photo/light-rays-coming-inside-the-khao-luang-cave-khao-royalty-free-image/688429096"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      background image
                    </a>{" "}
                    is a stock photo from Getty Images.
                  </li>
                  <li>
                    The descriptions for the readings were manually scraped from{" "}
                    <a href="https://www.iching.online/" target="_blank" rel="noopener noreferrer">
                      I Ching Online
                    </a>
                    , converted to HTML strings and compiled into JSON format using Microsoft Excel.
                    This app uses{" "}
                    <a
                      href="https://www.npmjs.com/package/react-html-parser"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React HTML Parser
                    </a>{" "}
                    to render them into the DOM. If you've found these readings useful, please
                    consider making a donation to I Ching Online through their home page.
                  </li>
                </ul>
              </div>
              <FooterText />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AboutComponent;
