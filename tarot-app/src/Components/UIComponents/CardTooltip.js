import React from "react";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

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

  if (!cardData) {
    return "No data";
  } else {
    return (
      <div>
        <div className={classes.mainWrapper}>
          <span className={classes.cardTitle}>{cardData.full_name}</span>
          <br />
          <span className={classes.cardDescription}>{cardData.deck_name}</span>
          <Divider style={{ marginTop: "0.3rem" }} />
          <span className={classes.cardDescription}>
            {cardData.description_short}
          </span>
          <Divider style={{ marginTop: "1.5rem", marginBottom: "0.2rem" }} />
          <span className={classes.cardDescription}>
            <span style={{ fontWeight: 700 }}>Symbol:</span> {cardData.symbol}
          </span>
        </div>
        <div
          className={classes.cardSuitChip}
          style={
            cardData.suit === "clubs"
              ? { borderBottom: "3rem solid rgba(220,0,0,0.5)" }
              : cardData.suit === "hearts"
              ? { borderBottom: "3rem solid rgba(0,85,185,0.5)" }
              : cardData.suit === "spades"
              ? { borderBottom: "3rem solid rgba(225,130,0,0.5)" }
              : cardData.suit === "diamonds"
              ? { borderBottom: "3rem solid rgba(0,130,0,0.5)" }
              : ""
          }
        >
          <span className={classes.cardSuitIcon}>
            {cardData.suit === "clubs"
              ? "♣"
              : cardData.suit === "hearts"
              ? "♥"
              : cardData.suit === "spades"
              ? "♠"
              : cardData.suit === "diamonds"
              ? "♦"
              : ""}
          </span>
        </div>
      </div>
    );
  }
}
