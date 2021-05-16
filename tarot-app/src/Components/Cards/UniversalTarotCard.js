import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import FitText from "@kennethormandy/react-fittext";
import { cardFlipAnimation } from "./CardFlipAnimation.js";

export default function UniversalTarotCard(props) {
  const { cardIndex, autoReveal, imageOnly, reversed } = props;

  const [cardImage, setCardImage] = useState(
    "https://alkemyst.co/universal-tarot/IMG_2305.jpg"
  );
  const [cardTitle, setCardTitle] = useState("Ace of Wands");

  const [rotationState, setRotationState] = useState(180);

  const cardBackground = "https://alkemyst.co/universal-tarot/cardback.jpg";

  const handleInitial = () => {
    let degrees = rotationState;
    autoReveal ? setRotationState(degrees + 180) : setRotationState(180);
  };
  const handleFlip = () => {
    let degrees = rotationState;
    setRotationState(degrees + 180);
  };
  const handleCardImage = () => {
    if (
      !cardIndex ||
      cardIndex === isNaN() ||
      cardIndex === 0 ||
      cardIndex > 74
    ) {
      console.log("UniversalTarotCard.js - Missing or invalid card index.");
    } else {
      setCardImage("https://alkemyst.co/universal-tarot/IMG_2305.jpg"); // placeholder
    }
  };
  const handleCardTitle = () => {
    if (
      !cardIndex ||
      cardIndex === isNaN() ||
      cardIndex === 0 ||
      cardIndex > 74
    ) {
      console.log("UniversalTarotCard.js - Missing or invalid card index.");
    } else {
      setCardTitle("Ace of Wands"); // placeholder
    }
  };

  useEffect(() => {
    handleCardImage();
    handleCardTitle();
    handleInitial();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const UniversalTarotStyles = makeStyles(() => ({
    outerWrapper: {
      width: "100%",
      border: "solid 0px green",
      position: "relative",
      backfaceVisibility: "hidden",
      transform: reversed ? "rotate(180deg)" : "none"
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
      backgroundImage: "url(" + "'" + cardBackground + "'" + ")",
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
      backgroundImage: "url(" + "'" + cardImage + "'" + ")",
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

  console.log("autoReveal is " + autoReveal);
  console.log("rotationState is " + rotationState);

  return (
    <div>
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
            <div
              className={classes.outerWrapper}
              style={{
                position: "absolute",
                top: "0rem",
                transform: "rotateY(180deg)"
              }}
            >
              <div className={classes.aspectRatio}>
                <div className={classes.innerWrapper}></div>
              </div>
            </div>
            {/* End Animation Container */}
          </div>
        </div>
      </FitText>
    </div>
  );
}

UniversalTarotCard.defaultProps = {
  cardIndex: undefined,
  reversed: false,
  autoReveal: true,
  imageOnly: false
};

UniversalTarotCard.propTypes = {
  cardIndex: PropTypes.string,
  reversed: PropTypes.bool,
  autoReveal: PropTypes.bool,
  imageOnly: PropTypes.bool
};
