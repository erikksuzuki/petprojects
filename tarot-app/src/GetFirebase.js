import React, { useState, useEffect, Fragment } from "react";

import Card from "./Components/Cards/CardIndex";
import getCardIndex from "./Components/Cards/UniversalTarot/Functions/getCardIndex";
import getCardValue from "./Components/Cards/UniversalTarot/Functions/getCardValue";
import getCardSuit from "./Components/Cards/UniversalTarot/Functions/getCardSuit";
import getCardSymbol from "./Components/Cards/UniversalTarot/Functions/getCardSymbol";
import getCardTitle from "./Components/Cards/UniversalTarot/Functions/getCardTitle";
import getCardDescriptionShort from "./Components/Cards/UniversalTarot/Functions/getCardDescriptionShort";
import getCardDescriptionLong from "./Components/Cards/UniversalTarot/Functions/getCardDescriptionLong";

import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

export default function GetFirebase() {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("universal-tarot-card-details");

  useEffect(() => {
    getCardDetails();
    // eslint-disable-next-line
  }, []);

  // ONE TIME GET FUNCTION
  function getCardDetails() {
    setLoading(true);
    ref
      .orderBy("cardIndex", "asc")
      .get()
      .then((item) => {
        const items = item.docs.map((doc) => doc.data());
        setCardDetails(items);
        setLoading(false);
      });
  }

  // ADD FUNCTION
  function addCardDetail(newCardDetail) {
    setLoading(true);
    ref
      //.doc()
      .doc(newCardDetail.id)
      .set(newCardDetail)
      .then(() => {
        // setCardDetails((prev) => [newCardDetail, ...prev]);
        setLoading(false);
        getCardDetails();
        setCardKey("");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // DELETE FUNCTION
  function deleteCardDetail(cardDetailToBeDeleted) {
    setLoading(true);
    ref
      .doc(cardDetailToBeDeleted.id)
      .delete()
      .then(() => {
        // setCardDetails((prev) =>
        //   prev.filter((element) => element.id !== cardDetailToBeDeleted.id)
        // );
        setLoading(false);
        getCardDetails();
        setCardKey("");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editCardDetail(updatedCardDetail) {
    setLoading(true);
    ref
      .doc(updatedCardDetail.id)
      .update(updatedCardDetail)
      .then(() => {
        // setCardDetails((prev) =>
        //   prev.map((element) => {
        //     if (element.id !== updatedCardDetail.id) {
        //       return element;
        //     }
        //     return updatedCardDetail;
        //   })
        // );
        setLoading(false);
        getCardDetails();
        setCardKey("");
      })
      .catch((err) => {
        console.error(err);
      });
  }

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

  const storedCardData = {
    id: cardKey,
    lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
    cardKey: cardKey,
    fullName: cardTitle,
    cardIndex: cardIndex,
    value: cardValue,
    suit: cardSuit,
    symbol: cardSymbol,
    descriptionShort: cardDescriptionShort,
    descriptionLong: cardDescriptionLong,
    deckName: deckName,
    deckAuthor: deckAuthor,
    deckWebsite: deckWebsite,
    deckYear: deckYear
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCardDetail(storedCardData);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteCardDetail(storedCardData);
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editCardDetail(storedCardData);
  };

  console.log(cardDetails);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {cardDetails.map((cardDetail) => (
            <div
              style={{
                width: "10rem",
                border: "solid 1px #ddd",
                padding: "1rem",
                display: "inline-block"
              }}
            >
              <Card
                key={cardDetail.card_index}
                cardData={cardDetail}
                autoReveal
                tooltip
              />
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <h4>Add card data</h4>
        <div>
          <label>Card Key</label>
          <input
            type="text"
            value={cardKey}
            onChange={(e) => setCardKey(e.currentTarget.value)}
          />
          <button onClick={handleSubmit}>Submit</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </div>
      </form>
    </div>
  );
}
