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

  var hexanumber = GetNumber(passedproperty);
  var hexanumberchanged = GetNumberChanged(passedproperty);

  var hexatitle = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].name;
  var hexadescription = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].description;
  var hexalineone = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_one;
  var hexalinetwo = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_two;
  var hexalinethree = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_three;
  var hexalinefour = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_four;
  var hexalinefive = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_five;
  var hexalinesix = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_six;

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
  var pickedline;
  var pickedlinenumber;

  useEffect(() => {
    flipcard();
  });

  if (hexastringprop.includes("B")) {
    pickedline = linearray[hexastringprop.lastIndexOf("B")];
    pickedlinenumber =
      hexastringprop.lastIndexOf("B") + 1 === 6
        ? "Top Changing Line"
        : "Changing Line " + (hexastringprop.lastIndexOf("B") + 1);
  } else if (hexastringprop.includes("W")) {
    pickedline = linearray[hexastringprop.lastIndexOf("W")];
    pickedlinenumber =
      hexastringprop.lastIndexOf("W") + 1 === 6
        ? "Top Changing Line"
        : "Changing Line " + (hexastringprop.lastIndexOf("W") + 1);
  } else {
    pickedline = null;
    pickedlinenumber = null;
  }

  const flipcard = () => {
    if (isloading) {
      setValue(0);
      console.log("loading");
    } else {
      console.log("descriptions loaded");
      if (value == 0) {
        const flipCardContainer = document.querySelector(".flip-card-container");
        flipCardContainer.classList.add("flip");
      } else {
        if (hexanumber != hexanumberchanged) {
          const flipCardContainerTwo = document.querySelector(".flip-card-container-two");
          flipCardContainerTwo.classList.add("flip");
        }
      }
    }
  };

  const getCardImage = () => {
    var cardnum = hexanumber - 1 > 9 ? hexanumber - 1 : "0" + (hexanumber - 1);
    return "./cards-tao/" + cardnum + ".jpg";
  };

  const getCardChanged = () => {
    var cardnum = hexanumberchanged - 1 > 9 ? hexanumberchanged - 1 : "0" + (hexanumberchanged - 1);
    return "./cards-tao/" + cardnum + ".jpg";
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
            <Tab label="Casted" {...a11yProps(0)} />
            <Tab label="Changed" {...a11yProps(1)} disabled={disabled} />
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
              <Tab label="Casted" {...a11yProps(0)} />
              <Tab label="Changed" {...a11yProps(1)} disabled={disabled} />
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
                  <div>
                    {pickedline != null
                      ? ReactHtmlParser('<div class="lineheader">' + pickedlinenumber + "</div>")
                      : null}
                  </div>
                  <p>{pickedline != null ? ReactHtmlParser(pickedline) : null}</p>
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
              <Tab label="Casted" {...a11yProps(0)} />
              <Tab label="Changed" {...a11yProps(1)} disabled={disabled} />
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
                  <div>
                    {hexastringprop.charAt(5) === "B" || hexastringprop.charAt(5) === "W"
                      ? ReactHtmlParser('<div class="lineheader">Top Changing Line</div>')
                      : null}
                  </div>
                  <p>
                    {hexastringprop.charAt(5) === "B" || hexastringprop.charAt(5) === "W"
                      ? ReactHtmlParser(hexalinesix)
                      : null}
                  </p>
                  <div>
                    {hexastringprop.charAt(4) === "B" || hexastringprop.charAt(4) === "W"
                      ? ReactHtmlParser('<div class="lineheader">Changing Line 5</div>')
                      : null}
                  </div>
                  <p>
                    {hexastringprop.charAt(4) === "B" || hexastringprop.charAt(4) === "W"
                      ? ReactHtmlParser(hexalinefive)
                      : null}
                  </p>
                  <div>
                    {hexastringprop.charAt(3) === "B" || hexastringprop.charAt(3) === "W"
                      ? ReactHtmlParser('<div class="lineheader">Changing Line 4</div>')
                      : null}
                  </div>
                  <p>
                    {hexastringprop.charAt(3) === "B" || hexastringprop.charAt(3) === "W"
                      ? ReactHtmlParser(hexalinefour)
                      : null}
                  </p>
                  <div>
                    {hexastringprop.charAt(2) === "B" || hexastringprop.charAt(2) === "W"
                      ? ReactHtmlParser('<div class="lineheader">Changing Line 3</div>')
                      : null}
                  </div>
                  <p>
                    {hexastringprop.charAt(2) === "B" || hexastringprop.charAt(2) === "W"
                      ? ReactHtmlParser(hexalinethree)
                      : null}
                  </p>
                  <div>
                    {hexastringprop.charAt(1) === "B" || hexastringprop.charAt(1) === "W"
                      ? ReactHtmlParser('<div class="lineheader">Changing Line 2</div>')
                      : null}
                  </div>
                  <p>
                    {hexastringprop.charAt(1) === "B" || hexastringprop.charAt(1) === "W"
                      ? ReactHtmlParser(hexalinetwo)
                      : null}
                  </p>
                  <div>
                    {hexastringprop.charAt(0) === "B" || hexastringprop.charAt(0) === "W"
                      ? ReactHtmlParser('<div class="lineheader">Changing Line 1</div>')
                      : null}
                  </div>
                  <p>
                    {hexastringprop.charAt(0) === "B" || hexastringprop.charAt(0) === "W"
                      ? ReactHtmlParser(hexalineone)
                      : null}
                  </p>
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
