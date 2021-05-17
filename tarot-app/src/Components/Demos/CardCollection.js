import React, { useState, useEffect } from "react";
import Card from "../Cards/CardIndex";
import firebase from "../../firebase";
import CardInputForm from "../Demos/CardInputForm";

function useCardDetails() {
  const [cardDetails, setCardDetails] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("universal-tarot-card-details")
      .onSnapshot((snapshot) => {
        const newDetails = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));

        setCardDetails(newDetails);
      });
  }, []);
  return cardDetails;
}

export default function CardCollection() {
  const cardDetails = useCardDetails();
  return (
    <div>
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
              cardType="universal-tarot"
              cardData={cardDetail}
              autoReveal={true}
              imageOnly={false}
              reversed={false}
              tooltip={true}
            />
          </div>
        ))}
      </div>
      ♈♉♊♋♌♍♎♏♐♑♒♓
      <CardInputForm />
    </div>
  );
}
