import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const url = new URL("https://api.prokerala.com/v1/astrology/planet-position");

  const [planetQuery, setQuery] = useState("Hello");

  var planetString;

  function getPlanets() {
    let params = {
      ayanamsa: "1",
      chart_type: "`rasi`",
      datetime: "2004-02-12T15:19:21+00:00",
      coordinates: "10.214747,78.097626",
    };
    Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

    let headers = {
      Authorization: "Bearer ",
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    fetch(url, {
      method: "GET",
      headers: headers,
    })
      .then((response) => response.json())
      .then(function (json) {
        console.log(json);
        planetString = JSON.stringify(json);
        setQuery(planetString);
      });
  }

  function clickthingy() {
    getPlanets();
  }

  return (
    <div className="App">
      <header className="App-header">This is the beginning of something beautiful</header>
      <p>{planetQuery}</p>

      <a onClick={clickthingy} style={{ cursor: "pointer" }}>
        Click here to show string request
      </a>
    </div>
  );
}

export default App;
