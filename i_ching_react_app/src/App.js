import React from "react";
import { HashRouter } from "react-router-dom";
import "./App.css";

import MainComponent from "./components/MainComponent";

// basename="/projects/iching"
// <BrowserRouter basename="/projects/iching">

function App() {
  return (
    <HashRouter>
      <div className="App">
        <MainComponent />
      </div>
    </HashRouter>
  );
}

export default App;
