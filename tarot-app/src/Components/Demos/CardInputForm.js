import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import firebase from "../../firebase";

export default function AddCardForm() {
  const [cardIndex, setCardIndex] = useState("");
  const [cardKey, setCardKey] = useState("");
  const [cardName, setCardName] = useState("");

  const [cardImg, setCardImg] = useState("");
  const [descriptionShort, setDescriptionShort] = useState("");
  const [descriptionLong, setDescriptionLong] = useState("");

  const [cardValue, setCardValue] = useState("");
  const [suit, setSuit] = useState("");
  const [symbol, setSymbol] = useState("");

  const deckName = "The Universal Tarot";
  const deckAuthor = "Maxwell Miller";
  const deckWebsite =
    "https://www.weiserantiquarian.com/pages/books/57769/maxwell-miller/the-universal-tarot-boxed-set?soldItem=true";
  const deckYear = "1995";

  return (
    <form>
      <h4>Add card data</h4>
      <div>
        <label>Card Name</label>
        <input type="text" />
      </div>
      <div>
        <label>Card Key</label>
        <input type="text" />
      </div>
      <div>
        <label>Card Key</label>
        <input type="text" />
      </div>
      <Divider />
      <div>
        <label>Card Image</label>
        <input type="text" />
      </div>
      <div>
        <label>Short Description</label>
        <input type="text" />
      </div>
      <div>
        <label>Long Description</label>
        <input type="text" />
      </div>
      <Divider />
      <div>
        <label>Value</label>
        <input type="text" />
      </div>
      <div>
        <label>Suit</label>
        <input type="text" />
      </div>
      <div>
        <label>Symbol</label>
        <input type="text" />
      </div>
    </form>
  );
}
