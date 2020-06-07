import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import MainComponent from "./components/MainComponent";

// basename="/projects/iching"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
