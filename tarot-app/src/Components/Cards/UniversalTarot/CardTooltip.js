import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import SuitSymbol from "../../UIComponents/Icons/SuitSymbol";

export default function CardTooltip({ cardData }) {
  const CardTooltipStyles = makeStyles(() => ({
    mainWrapper: {
      padding: "0.5rem",
      width: "16rem",
      backgroundColor: "rgba(0,0,0,0.7)",
      color: "white"
    },
    cardTitle: {
      fontWeight: "700",
      fontFamily: "Quattrocento",
      fontSize: "1rem"
    },
    cardDescription: {
      fontSize: "0.75rem"
    },
    cardValueChip: {
      position: "absolute",
      top: "0px",
      right: "-3rem",
      width: "0",
      height: "0",
      borderLeft: "3rem solid transparent",
      borderRight: "3rem solid transparent"
    },
    cardValueIcon: {
      position: "absolute",
      top: "-2.75rem",
      left: "-1.3rem",
      color: "white",
      fontFamily: "RocknRoll One",
      opacity: "0.5"
    },
    cardSuitChip: {
      position: "absolute",
      bottom: "0px",
      right: "-3rem",
      width: "0",
      height: "0",
      borderLeft: "3rem solid transparent",
      borderRight: "3rem solid transparent"
    },
    cardSuitIcon: {
      position: "absolute",
      top: "1.25rem",
      left: "-1.3rem",
      color: "white",
      fontFamily: "RocknRoll One",
      opacity: "0.5"
    }
  }));
  const classes = CardTooltipStyles();

  function CardValueChip() {
    const cardValueChipText =
      cardData.cardKey.charAt(1) === "I"
        ? cardData.cardKey.charAt(3) === "0"
          ? "10"
          : cardData.cardKey.charAt(3)
        : cardData.cardIndex - 53;
    return (
      <div
        className={classes.cardValueChip}
        style={
          cardData.suit === "clubs"
            ? { borderTop: "3rem solid rgba(255,0,0,0.5)" }
            : cardData.suit === "hearts"
            ? { borderTop: "3rem solid rgba(0,100,255,0.6)" }
            : cardData.suit === "spades"
            ? { borderTop: "3rem solid rgba(255,130,0,0.6)" }
            : cardData.suit === "diamonds"
            ? { borderTop: "3rem solid rgba(0,170,90,0.5)" }
            : { borderTop: "3rem solid rgba(220,0,90,0.5)" }
        }
      >
        <span className={classes.cardValueIcon}>
          <span
            style={{
              position: "relative",
              left:
                cardValueChipText === 0
                  ? "0.2rem"
                  : cardValueChipText.length < 2
                  ? "0.15rem"
                  : "0rem",
              top: cardValueChipText.length < 2 ? "0rem" : "-0.1rem",
              fontFamily: "Quattrocento",
              fontSize: cardValueChipText.length < 2 ? "1.2rem" : "1rem",
              fontWeight: 700
            }}
          >
            {cardValueChipText}
          </span>
        </span>
      </div>
    );
  }

  function CardSuitChip() {
    return (
      <div
        className={classes.cardSuitChip}
        style={
          cardData.suit === "clubs"
            ? { borderBottom: "3rem solid rgba(255,0,0,0.5)" }
            : cardData.suit === "hearts"
            ? { borderBottom: "3rem solid rgba(0,100,255,0.6)" }
            : cardData.suit === "spades"
            ? { borderBottom: "3rem solid rgba(225,130,0,0.6)" }
            : cardData.suit === "diamonds"
            ? { borderBottom: "3rem solid rgba(0,170,90,0.5)" }
            : { borderBottom: "3rem solid rgba(220,0,90,0.5)" }
        }
      >
        <span className={classes.cardSuitIcon}>
          <SuitSymbol suit={cardData.suit} />
        </span>
      </div>
    );
  }

  if (!cardData) {
    return "No data";
  } else {
    return (
      <div>
        <CardValueChip />

        <div className={classes.mainWrapper}>
          <span className={classes.cardTitle}>{cardData.fullName}</span>
          <br />
          <span className={classes.cardDescription}>{cardData.deckName}</span>
          <Divider style={{ marginTop: "0.3rem" }} />
          <span className={classes.cardDescription}>
            {cardData.descriptionShort}
          </span>
          <Divider style={{ marginTop: "1.5rem", marginBottom: "0.2rem" }} />
          <span className={classes.cardDescription}>
            <span style={{ fontWeight: 700 }}>Symbol:</span> {cardData.symbol}
          </span>
        </div>

        <CardSuitChip />
      </div>
    );
  }
}
