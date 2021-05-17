import React from "react";
import UniversalTarotCard from "./UniversalTarotCard";

export default function Card(props) {
  const { cardType, cardData, autoReveal, imageOnly, reversed, tooltip } =
    props;

  function RenderCard() {
    if (cardType === null || cardType === undefined) {
      return "No Card Type Selected";
    } else if (cardType === "universal-tarot") {
      return (
        <UniversalTarotCard
          cardData={cardData}
          autoReveal={autoReveal}
          imageOnly={imageOnly}
          reversed={reversed}
          tooltip={tooltip}
        />
      );
    } else {
      return "Unsupported Card Type";
    }
  }

  function CardWrapper() {
    return <RenderCard />;
  }

  return <CardWrapper />;
}
