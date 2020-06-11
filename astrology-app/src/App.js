import React, { useState, useEffect } from "react";
import MainComponent from "./components/MainComponent";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <MainComponent />
      </div>
    </Router>
  );
}

export default App;
