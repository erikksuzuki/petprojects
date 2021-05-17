import React from "react";
import CardCollection from "./Components/Demos/CardCollection";
import "./App.css";

// firebase.firestore().collection("universal-tarot-card-details").add({
//   title: "Some Title",
//   indexNumber: 100
// });

function App() {
  return <CardCollection />;
}

export default App;
