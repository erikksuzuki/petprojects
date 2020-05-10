import React from "react";
import html2canvas from "html2canvas";
import "./App.css";
import Template from "./components/Template";

function App() {
  function generateScreenshot() {
    html2canvas(document.getElementById("inputarea")).then(function (canvas) {
      document.getElementById("wrapper").appendChild(canvas);
    });
  }
  return (
    <div>
      <div id="inputarea">
        <Template bgcolor="#ff0000" textcolor="#ffffff" headercolor="#ffffff" />
      </div>
      <div className="container" id="wrapper"></div>
      <button onClick={generateScreenshot}>Generate</button>
    </div>
  );
}

export default App;
