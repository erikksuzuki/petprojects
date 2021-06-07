import React, { useState, useEffect, Fragment } from "react";
import firebase from "./firebase";
import { v4 as uuidv4 } from "uuid";

export default function SnapshoFirebase() {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("universal-tarot-card-details");

  // REALTIME GET FUNCTION
  function getCardDetails() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setCardDetails(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getCardDetails();
    // eslint-disable-next-line
  }, []);

  // ADD FUNCTION
  function addCardDetail(newCardDetail) {
    ref
      //.doc()
      .doc(newCardDetail.id)
      .set(newCardDetail)
      .catch((err) => {
        console.error(err);
      });
  }

  // DELETE FUNCTION
  function deleteCardDetail(cardDetail) {
    ref
      .doc(cardDetail.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  // EDIT FUNCTION
  function editCardDetail(updatedCardDetail) {
    ref
      .doc(updatedCardDetail.id)
      .update(updatedCardDetail)
      .catch((err) => {
        console.error(err);
      });
  }
}
