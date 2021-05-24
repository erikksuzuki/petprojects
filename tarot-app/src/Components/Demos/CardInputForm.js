import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import getCardIndex from "../Cards/UniversalTarot/Functions/getCardIndex";
import getCardValue from "../Cards/UniversalTarot/Functions/getCardValue";
import getCardSuit from "../Cards/UniversalTarot/Functions/getCardSuit";
import getCardSymbol from "../Cards/UniversalTarot/Functions/getCardSymbol";
import getCardTitle from "../Cards/UniversalTarot/Functions/getCardTitle";
import getCardDescriptionShort from "../Cards/UniversalTarot/Functions/getCardDescriptionShort";
import getCardDescriptionLong from "../Cards/UniversalTarot/Functions/getCardDescriptionLong";
import firebase from "../../firebase";

export default function AddCardForm() {
  const [cardKey, setCardKey] = useState("");

  const cardTitle = getCardTitle(cardKey);
  const cardIndex = getCardIndex(cardKey);
  const cardValue = getCardValue(cardKey);
  const cardSuit = getCardSuit(cardKey);
  const cardSymbol = getCardSymbol(cardKey);
  const cardDescriptionShort = getCardDescriptionShort(cardKey);
  const cardDescriptionLong = getCardDescriptionLong(cardKey);

  const deckName = "The Universal Tarot";
  const deckAuthor = "Maxwell Miller";
  const deckWebsite =
    "https://www.weiserantiquarian.com/pages/books/57769/maxwell-miller/the-universal-tarot-boxed-set?soldItem=true";
  const deckYear = "1995";

  function onSubmit(e) {
    e.preventDefault();

    firebase
      .firestore()
      .collection("universal-tarot-card-details")
      .add({
        id: cardKey,
        card_key: cardKey,
        full_name: cardTitle,
        card_index: cardIndex,
        value: cardValue,
        suit: cardSuit,
        symbol: cardSymbol,
        description_short: cardDescriptionShort,
        description_long: cardDescriptionLong,
        deck_author: deckAuthor,
        deck_name: deckName,
        deck_website: deckWebsite,
        deck_year: deckYear
      })
      .then(() => {
        setCardKey("");
      });
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>Add card data</h4>
      <div>
        <label>Card Key</label>
        <input
          type="text"
          value={cardKey}
          onChange={(e) => setCardKey(e.currentTarget.value)}
        />
      </div>
    </form>
  );
}
