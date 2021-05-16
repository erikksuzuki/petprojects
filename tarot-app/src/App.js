import React, { useState } from "react";
import Card from "./Components/Cards/CardIndex";
import Button from "@material-ui/core/Button";
import "./App.css";

function App() {
  const [reversed, setReversed] = useState(false);
  const [autoReveal, setAutoReveal] = useState(true);

  function Controls() {
    return (
      <div>
        <br />
        <br />
        <Button
          style={{ fontSize: "0.8rem" }}
          variant="outlined"
          onClick={() => setAutoReveal(!autoReveal)}
        >
          Auto Reveal {`${autoReveal.toString()}`}
        </Button>{" "}
        <Button
          style={{ fontSize: "0.8rem" }}
          variant="outlined"
          onClick={() => setReversed(!reversed)}
        >
          Reversed {`${reversed.toString()}`}
        </Button>
      </div>
    );
  }

  return (
    <div className="App">
      <div
        style={{
          width: "15rem",
          marginTop: "3rem",
          marginLeft: "auto",
          marginRight: "auto"
        }}
      >
        <Card
          cardType="The Universal Tarot"
          cardIndex={1}
          autoReveal={autoReveal}
          imageOnly={false}
          reversed={reversed}
        />
      </div>
      <Controls />
    </div>
  );
}

export default App;
