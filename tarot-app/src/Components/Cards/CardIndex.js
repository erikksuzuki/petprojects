import React from "react";
import UniversalTarotCard from "./UniversalTarotCard";

export default function Card(props) {
  const { cardType, cardIndex, autoReveal, imageOnly, reversed } = props;

  function RenderCard() {
    if (cardType === null || cardType === undefined) {
      return "No Card Type Selected";
    } else if (cardType === "The Universal Tarot") {
      return (
        <UniversalTarotCard
          cardIndex={cardIndex}
          autoReveal={autoReveal}
          imageOnly={imageOnly}
          reversed={reversed}
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
