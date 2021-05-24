import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FitText from "@kennethormandy/react-fittext";
import { cardFlipAnimation } from "./Functions/cardFlipAnimation.js";
import getCardImage from "./Functions/getCardImage";

import Popover from "@material-ui/core/Popover";
import CardTooltip from "./CardTooltip";

export default function UniversalTarotCard(props) {
  const { cardData, autoReveal, imageOnly, reversed, tooltip } = props;
  const [rotationState, setRotationState] = useState(180);
  const [anchorEl, setAnchorEl] = useState(null);

  const cardImage = "'" + getCardImage(cardData.card_key) + "'";
  const cardTitle = cardData.full_name;
  const cardBackground =
    '"https://cdn.image4.io/alkemyst/f_auto/1d04697d-5052-462e-9150-eb0cc4f04875.jpg"';

  const handleInitial = () => {
    let degrees = rotationState;
    autoReveal ? setRotationState(degrees + 180) : setRotationState(180);
  };
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
    handleInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UniversalTarotStyles = makeStyles(() => ({
    popover: {
      pointerEvents: "none"
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
      paddingBottom: "141%",
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
      top: "4.9%",
      left: "7.76%",
      border: "solid 0px grey",
      borderRadius: "3%",
      width: "84.8%",
      height: "81%",
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
      backgroundSize: "cover",
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

  const UniversalTarotAnimationStyles = makeStyles(() => cardFlipAnimation);
  const animationClasses = UniversalTarotAnimationStyles();

  return (
    <div
      aria-owns={open ? "mouse-over-popover" : undefined}
      aria-haspopup="true"
      onMouseEnter={tooltip === true ? handlePopoverOpen : null}
      onMouseLeave={tooltip === true ? handlePopoverClose : null}
    >
      <FitText compressor={2.15}>
        <div
          className={animationClasses.flipCardContainer}
          onClick={() => handleFlip()}
        >
          <div
            className={animationClasses.flipCard}
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

UniversalTarotCard.defaultProps = {
  cardData: {
    card_index: "1",
    card_key: "MI_AW",
    deck_author: "Maxwell Miller",
    deck_name: "The Universal Tarot",
    deck_website:
      "https://www.weiserantiquarian.com/pages/books/57769/maxwell-miller/the-universal-tarot-boxed-set?soldItem=true",
    deck_year: "1995",
    description_long: "Long description",
    description_short: "Short description",
    full_name: "Ace of Wands",
    img_url: "https://alkemyst.co/universal-tarot/IMG_2305.jpg",
    suit: "Clubs",
    symbol: "Power of Fire"
  },
  reversed: false,
  autoReveal: true,
  imageOnly: false,
  tooltip: true
};

UniversalTarotCard.propTypes = {
  reversed: PropTypes.bool,
  autoReveal: PropTypes.bool,
  imageOnly: PropTypes.bool
};
