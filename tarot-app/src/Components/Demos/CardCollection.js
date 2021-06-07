import React, { useState, useEffect } from "react";
import Card from "../Cards/CardIndex";
import firebase from "../../firebase";
import CardInputForm from "../Demos/CardInputForm";
import AccordianDemo from "./AccordianDemo";

const SORT_OPTIONS = {
  INDEX_ASC: { column: "card_index", direction: "asc" },
  INDEX_DESC: { column: "card_index", direction: "desc" }
};

function useCardDetails(sortBy = "INDEX_ASC") {
  const [cardDetails, setCardDetails] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("universal-tarot-card-details")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .onSnapshot((snapshot) => {
        const newDetails = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setCardDetails(newDetails);
      });

    return () => unsubscribe();
  }, [sortBy]);

  return cardDetails;
}

export default function CardCollection() {
  const [sortBy, setSortBy] = useState("INDEX_ASC");
  const cardDetails = useCardDetails(sortBy);

  return (
    <div>
      <div>
        <label>Sort By:</label>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.currentTarget.value)}
        >
          <option value="INDEX_ASC">Index Asc</option>
          <option value="INDEX_DESC">Index Desc</option>
        </select>
      </div>
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
            <Card cardData={cardDetail} autoReveal tooltip />
          </div>
        ))}
      </div>
      <CardInputForm />
      <br />
      <br />
    </div>
  );
}
