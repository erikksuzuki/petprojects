import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FitText from "@kennethormandy/react-fittext";
import getCardImage from "./Functions/getCardImage";

import Popover from "@material-ui/core/Popover";
import CardTooltip from "./CardTooltip";

export default function UniversalTarotCard(props) {
  const { cardData, autoReveal, imageOnly, reversed, unchanging, tooltip } =
    props;
  const [rotationState, setRotationState] = useState(unchanging ? 0 : 180);
  const [anchorEl, setAnchorEl] = useState(null);

  const cardImage = "'" + getCardImage(cardData.cardKey) + "'";
  const cardTitle = cardData.fullName;
  const cardBackground =
    '"https://cdn.image4.io/alkemyst/f_auto/1d04697d-5052-462e-9150-eb0cc4f04875.jpg"';

  const handleFlip = () => {
    let degrees = rotationState;
    setRotationState(degrees + 180);
  };
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  useEffect(() => {
    autoReveal & !unchanging && handleFlip();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UniversalTarotStyles = makeStyles(() => ({
    popover: {
      pointerEvents: "none"
    },
    flipCardContainer: {
      width: "100%",
      position: "relative",
      perspective: "1000px",
      cursor: "pointer"
    },
    flipCard: {
      position: "relative",
      width: "100%",
      transition: "transform 1s",
      transformStyle: "preserve-3d",
      borderRadius: "3%",
      boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.6)"
    },
    outerWrapper: {
      width: "100%",
      border: "solid 0px green",
      position: "relative",
      backfaceVisibility: "hidden",
      transform: reversed ? "rotate(180deg)" : "none"
    },
    outerWrapperBack: {
      width: "100%",
      border: "solid 0px green",
      backfaceVisibility: "hidden",
      transform: reversed ? "rotate(180deg)" : "none",
      position: "absolute",
      top: "0rem",
      transform: "rotateY(180deg)"
    },
    aspectRatio: {
      width: "100%",
      paddingBottom: imageOnly ? "133%" : "141%",
      border: "solid 0px blue"
    },
    innerWrapper: {
      position: "absolute",
      left: 0,
      top: 0,
      border: "solid 0px blue",
      width: "100%",
      height: "100%",
      backgroundImage: `url(${cardBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center top",
      borderRadius: "3%"
    },
    innerBorder: {
      position: "absolute",
      top: imageOnly ? "0px" : "4.9%",
      left: imageOnly ? "0px" : "7.76%",
      border: "solid 0px grey",
      borderRadius: "3%",
      width: imageOnly ? "100%" : "84.8%",
      height: imageOnly ? "100%" : "81%",
      backgroundColor: "grey"
    },
    innerImage: {
      position: "absolute",
      top: "0.35%",
      left: "0.40%",
      border: "solid 0px grey",
      borderRadius: "3%",
      width: "99%",
      height: "99.3%",
      backgroundImage: `url(${cardImage})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: imageOnly ? "100% 100%" : "cover",
      backgroundPosition: "center top"
    },
    titleBorder: {
      position: "absolute",
      left: "11%",
      height: "8.2%",
      borderRadius: "100rem",
      bottom: "-12.7%",
      backgroundColor: "grey",
      width: "78%"
    },
    titleBox: {
      position: "absolute",
      display: "grid",
      justifyContent: "center",
      alignContent: "center",
      left: "0.7%",
      top: "4%",
      borderRadius: "100rem",
      color: "#cccccc",
      backgroundColor: "black",
      width: "98.5%",
      height: "92%",
      fontFamily: "Quattrocento",
      fontWeight: 700
    }
  }));
  const classes = UniversalTarotStyles();

  return (
    <div
      aria-owns={open ? "mouse-over-popover" : undefined}
      aria-haspopup="true"
      onMouseEnter={tooltip === true ? handlePopoverOpen : null}
      onMouseLeave={tooltip === true ? handlePopoverClose : null}
    >
      <FitText compressor={2.15}>
        <div
          className={classes.flipCardContainer}
          onClick={() => (!unchanging ? handleFlip() : null)}
        >
          <div
            className={classes.flipCard}
            style={{
              transform: `rotateY(${rotationState}deg)`
            }}
          >
            {/* Front Side of the Card */}
            <div className={classes.outerWrapper}>
              <div className={classes.aspectRatio}>
                <div className={classes.innerWrapper}></div>
                <div className={classes.innerBorder}>
                  <div className={classes.innerImage}>
                    {imageOnly === true ? null : (
                      <div className={classes.titleBorder}>
                        <div className={classes.titleBox}>{cardTitle}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* Back Side of the Card */}
            <div className={classes.outerWrapperBack}>
              <div className={classes.aspectRatio}>
                <div className={classes.innerWrapper}></div>
              </div>
            </div>
            {/* End Animation Container */}
          </div>
        </div>
      </FitText>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <CardTooltip cardData={cardData} />
      </Popover>
    </div>
  );
}
