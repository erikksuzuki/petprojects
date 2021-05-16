import React from "react";
import FitText from "@kennethormandy/react-fittext";
import Paper from "@material-ui/core/Paper";

export default function CardDescription(props) {
  const { cardType, cardIndex, extended } = props;
  const cardTitle = (
    <span
      style={{
        fontFamily: "Quattrocento",
        fontWeight: 700,
        fontSize: "1.8rem"
      }}
    >
      Ace of Wands
    </span>
  );
  const cardDescription = (
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </span>
  );
  return (
    <Paper>
      {cardTitle}
      <br />
      {cardDescription}
    </Paper>
  );
}
