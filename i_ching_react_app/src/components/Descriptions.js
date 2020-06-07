import React, { useEffect, useState } from "react";
import GetNumber from "./GetNumber";
import GetNumberChanged from "./GetNumberChanged";
import { HEXAGRAMS } from "../shared/hexagramdetails";
import ReactHtmlParser from "react-html-parser";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    backgroundImage: `url('clothbg.jpg')`,
    width: "100%",
  },
  tabPanel: {
    fontSize: 12,
  },
}));

function Descriptions(props) {
  var passedproperty = props;
  var hexastringprop = props.string;
  var readingtype = props.readingtype;
  var isloading = props.isloading;
  var cardstyle = props.cardtype;

  // titles and descriptions for unchanged
  var hexanumber = GetNumber(passedproperty);
  var hexatitle = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].name;
  var hexadescription = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].description;

  // line descriptions
  var hexalineone = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_one;
  var hexalinetwo = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_two;
  var hexalinethree = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_three;
  var hexalinefour = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_four;
  var hexalinefive = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_five;
  var hexalinesix = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_six;

  // titles and descriptions for changed
  var hexanumberchanged = GetNumberChanged(passedproperty);
  var hexatitlechanged = HEXAGRAMS.filter((x) => x.id === hexanumberchanged)[0].name;
  var hexachangeddescription = HEXAGRAMS.filter((x) => x.id === hexanumberchanged)[0].description;

  // PICK OUT THE RELEVENT LINE FOR SINGLE LINE READING
  var linearray = [
    hexalineone,
    hexalinetwo,
    hexalinethree,
    hexalinefour,
    hexalinefive,
    hexalinesix,
  ];

  let masterYinLine;
  let pickedlineclass;

  function findMasterYin() {
    let changinglines = [];
    let unchanginglines = [];
    for (let i = 0; i < 6; i++) {
      hexastringprop.charAt(i) === "B" || hexastringprop.charAt(i) === "W"
        ? changinglines.push(hexastringprop.charAt(i) + i)
        : unchanginglines.push(hexastringprop.charAt(i) + i);
    }
    if (changinglines.length === 1) {
      masterYinLine = changinglines[0].charAt(1) * 1;
    } else if (changinglines.length === 2) {
      if (changinglines[0].charAt(0) === changinglines[1].charAt(0)) {
        masterYinLine = changinglines[0].charAt(1) * 1;
      } else {
        changinglines[0].charAt(0) === "B"
          ? (masterYinLine = changinglines[0].charAt(1) * 1)
          : (masterYinLine = changinglines[1].charAt(1) * 1);
      }
    } else if (changinglines.length === 3) {
      masterYinLine = changinglines[1].charAt(1) * 1;
    } else if (changinglines.length === 4) {
      masterYinLine = unchanginglines[1].charAt(1) * 1;
    } else if (changinglines.length === 5) {
      masterYinLine = unchanginglines[0].charAt(1) * 1;
    } else if (changinglines.length === 6) {
      masterYinLine = 6;
    } else if (changinglines.length === 0) {
      masterYinLine = null;
    }
    hexastringprop.charAt(masterYinLine) === "B" || hexastringprop.charAt(masterYinLine) === "W"
      ? (pickedlineclass = "lineheader")
      : (pickedlineclass = "lineheadergrey");
    console.log(
      "Changing: " +
        changinglines +
        ". Unchanging: " +
        unchanginglines +
        ". Master Yin index is: " +
        masterYinLine
    );
  }

  var pickedlineheader;
  var pickedlinetext;

  console.log(hexastringprop.charAt(masterYinLine));

  findMasterYin();
  if (masterYinLine != null && masterYinLine != 6 && masterYinLine != undefined) {
    pickedlinetext = linearray[masterYinLine];
    let changedstate = pickedlineclass === "lineheader" ? "Changing" : "Non-changing";
    pickedlineheader =
      masterYinLine === 5 ? (
        <div className={pickedlineclass}>
          ●&nbsp;&nbsp; Top Prevailing {changedstate} Line &nbsp;&nbsp;●
        </div>
      ) : (
        <div className={pickedlineclass}>
          ●&nbsp;&nbsp; Prevailing {changedstate} Line {masterYinLine + 1} &nbsp;&nbsp;●
        </div>
      );
  } else if (masterYinLine === 6) {
    pickedlinetext =
      "All lines are changing.<br />Study closely the relationship between<br />this hexagram and the transformed hexagram.";
    pickedlineheader = <div className="lineheader">All Lines Changing</div>;
  } else {
    pickedlinetext = null;
    pickedlineheader = null;
  }
  function getLineHeader(index) {
    let thisheader;
    if (index === masterYinLine) {
      if (masterYinLine === 5) {
        if (hexastringprop.charAt(index) === "B" || hexastringprop.charAt(index) === "W") {
          thisheader =
            '<div class="lineheader">●&nbsp;&nbsp; Top Prevailing Line &nbsp;&nbsp;●</div>';
        } else {
          thisheader =
            '<div class="lineheadergrey">●&nbsp;&nbsp; Top Prevailing Line &nbsp;&nbsp;●</div>';
        }
      } else {
        if (hexastringprop.charAt(index) === "B" || hexastringprop.charAt(index) === "W") {
          thisheader =
            '<div class="lineheader">●&nbsp;&nbsp; Prevailing Changing Line ' +
            (index + 1) +
            " &nbsp;&nbsp;●</div>";
        } else {
          thisheader =
            '<div class="lineheadergrey">●&nbsp;&nbsp; Prevailing Non-changing Line ' +
            (index + 1) +
            " &nbsp;&nbsp;●</div>";
        }
      }
    } else if (hexastringprop.charAt(index) === "B" || hexastringprop.charAt(index) === "W") {
      thisheader = '<div class="lineheadersmall">Changing Line ' + (index + 1) + "</div>";
    } else {
      thisheader = '<div class="lineheadersmallgrey">Non-changing Line ' + (index + 1) + "</div>";
    }
    return thisheader;
  }

  useEffect(() => {
    checkCard();
  });

  // methods of rendering the card image
  function checkCard() {
    if (isloading || props.cardstate === true) {
      setValue(0);
      console.log("loading");
    } else {
      let img = document.createElement("img");
      img.src = getCardImage();
      img.onload = () => flipcard();
    }
  }
  const flipcard = () => {
    if (isloading) {
      setValue(0);
      console.log("loading");
    } else {
      console.log("descriptions loaded");
      if (value == 0) {
        document.querySelector(".flip-card-container").classList.add("flip");
      } else {
        if (hexanumber != hexanumberchanged) {
          document.querySelector(".flip-card-container-two").classList.add("flip");
        }
      }
    }
  };
  const getCardImage = () => {
    var cardnum = hexanumber - 1 > 9 ? hexanumber - 1 : "0" + (hexanumber - 1);
    if (cardstyle === "Tao Oracle Cards") {
      return "./cards-tao/" + cardnum + ".jpg";
    } else if (cardstyle === "Clark-Gill Cards") {
      return "./cards/" + cardnum + ".jpg";
    } else {
      return "./cards-loscarabeo/" + cardnum + ".jpg";
    }
  };
  const getCardChanged = () => {
    var cardnum = hexanumberchanged - 1 > 9 ? hexanumberchanged - 1 : "0" + (hexanumberchanged - 1);
    if (cardstyle === "Tao Oracle Cards") {
      return "./cards-tao/" + cardnum + ".jpg";
    } else if (cardstyle === "Clark-Gill Cards") {
      return "./cards/" + cardnum + ".jpg";
    } else {
      return "./cards-loscarabeo/" + cardnum + ".jpg";
    }
  };

  // variables and functions for tabs

  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  var disabled;
  if (isloading) {
    disabled = true;
  } else {
    if (hexanumber != hexanumberchanged) {
      disabled = null;
    } else {
      disabled = true;
    }
  }

  // rendering below

  if (isloading) {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Situation" {...a11yProps(0)} />
            <Tab label="Transformed" {...a11yProps(1)} disabled={disabled} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel className={classes.tabPanel} value={value} index={0} dir={theme.direction}>
            <div className="loadcontainer">
              <img src="bagua.png" className="loadingspin" />
              <br />
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    );
  } else {
    if (readingtype === false) {
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Situation" {...a11yProps(0)} />
              <Tab label="Transformed" {...a11yProps(1)} disabled={disabled} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className={classes.tabPanel}>
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-front">
                      <img src="./cards/back.jpg" />
                    </div>
                    <div className="flip-card-back">
                      <img src={getCardImage()} />
                    </div>
                  </div>
                </div>
                <h3>
                  {hexanumber} - {hexatitle}
                </h3>
                <div className="descriptiontext">
                  <p>{ReactHtmlParser(hexadescription)}</p>
                  <div>{pickedlinetext != null ? pickedlineheader : null}</div>
                  <p>{pickedlinetext != null ? ReactHtmlParser(pickedlinetext) : null}</p>
                </div>
              </div>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className={classes.tabPanel}>
                {hexanumber === hexanumberchanged ? null : (
                  <div className="cardarrowcontainer">
                    <div className="flip-card-container-two">
                      <div className="flip-card">
                        <div className="flip-card-front">
                          <img src="./cards/back.jpg" />
                        </div>
                        <div className="flip-card-back">
                          <img src={getCardChanged()} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <h3>
                  {hexanumber === hexanumberchanged
                    ? null
                    : ReactHtmlParser(hexanumberchanged + " - " + hexatitlechanged)}
                </h3>
                <div className="descriptiontext">
                  <p>
                    {hexanumber === hexanumberchanged
                      ? "No changed hexagram to show."
                      : ReactHtmlParser(hexachangeddescription)}
                  </p>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Situation" {...a11yProps(0)} />
              <Tab label="Transformed" {...a11yProps(1)} disabled={disabled} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div className={classes.tabPanel}>
                <div className="flip-card-container">
                  <div className="flip-card">
                    <div className="flip-card-front">
                      <img src="./cards/back.jpg" />
                    </div>
                    <div className="flip-card-back">
                      <img src={getCardImage()} />
                    </div>
                  </div>
                </div>
                <h3>
                  {hexanumber} - {hexatitle}
                </h3>
                <div className="descriptiontext">
                  <p>{ReactHtmlParser(hexadescription)}</p>
                  <div>{ReactHtmlParser(getLineHeader(5) + "<p>" + hexalinesix + "</p>")}</div>
                  <div>{ReactHtmlParser(getLineHeader(4) + "<p>" + hexalinefive + "</p>")}</div>
                  <div>{ReactHtmlParser(getLineHeader(3) + "<p>" + hexalinefour + "</p>")}</div>
                  <div>{ReactHtmlParser(getLineHeader(2) + "<p>" + hexalinethree + "</p>")}</div>
                  <div>{ReactHtmlParser(getLineHeader(1) + "<p>" + hexalinetwo + "</p>")}</div>
                  <div>{ReactHtmlParser(getLineHeader(0) + "<p>" + hexalineone + "</p>")}</div>
                </div>
              </div>
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
              <div className={classes.tabPanel}>
                {hexanumber === hexanumberchanged ? null : (
                  <div>
                    <div className="flip-card-container-two">
                      <div className="flip-card">
                        <div className="flip-card-front">
                          <img src="./cards/back.jpg" />
                        </div>
                        <div className="flip-card-back">
                          <img src={getCardChanged()} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <h3>
                  {hexanumber === hexanumberchanged
                    ? null
                    : ReactHtmlParser(hexanumberchanged + " - " + hexatitlechanged)}
                </h3>
                <div className="descriptiontext">
                  <p>
                    {hexanumber === hexanumberchanged
                      ? "No changed hexagram to show."
                      : ReactHtmlParser(hexachangeddescription)}
                  </p>
                </div>
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      );
    }
  }
}

export default Descriptions;
