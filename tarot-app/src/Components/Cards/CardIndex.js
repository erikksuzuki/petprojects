import React from "react";
import PropTypes from "prop-types";
import UniversalTarotCard from "./UniversalTarot/UniversalTarotCard";

export default function Card(props) {
  const {
    cardType,
    cardData,
    autoReveal,
    imageOnly,
    reversed,
    unchanging,
    tooltip
  } = props;

  if (cardType === null || cardType === undefined) {
    return "No Card Type Selected";
  } else if (cardType === "universal-tarot") {
    return (
      <UniversalTarotCard
        cardData={cardData}
        unchanging={unchanging}
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

Card.defaultProps = {
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
    suit: "clubs",
    symbol: "Power of Fire"
  },
  cardType: "universal-tarot",
  reversed: false,
  autoReveal: false,
  imageOnly: false,
  unchanging: false,
  tooltip: false
};

Card.propTypes = {
  reversed: PropTypes.bool,
  autoReveal: PropTypes.bool,
  imageOnly: PropTypes.bool,
  unchanging: PropTypes.bool,
  tooltip: PropTypes.bool
};
