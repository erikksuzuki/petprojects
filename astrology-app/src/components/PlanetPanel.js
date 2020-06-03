import React from "react";
import { planetData } from "../shared/planetData";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";

function PlanetPanel(props) {
  const planet = props.planet;
  const sign = props.sign;

  const signNumber = (sign) =>
    ({
      Mesha: 0,
      Vrishabha: 1,
      Mithuna: 2,
      Karka: 3,
      Simha: 4,
      Kanya: 5,
      Tula: 6,
      Vrischika: 7,
      Dhanu: 8,
      Makara: 9,
      Kumbha: 10,
      Meena: 11,
    }[sign]);

  const planetImage = "planets/" + planet.toLowerCase() + ".png";

  const constelationImages = [
    { backgroundImage: 'url("signs/aries.jpg")' },
    { backgroundImage: 'url("signs/taurus.jpg")' },
    { backgroundImage: 'url("signs/gemini.jpg")' },
    { backgroundImage: 'url("signs/cancer.jpg")' },
    { backgroundImage: 'url("signs/leo.jpg")' },
    { backgroundImage: 'url("signs/virgo.jpg")' },
    { backgroundImage: 'url("signs/libra.jpg")' },
    { backgroundImage: 'url("signs/scorpio.jpg")' },
    { backgroundImage: 'url("signs/sagittarius.jpg")' },
    { backgroundImage: 'url("signs/capricorn.jpg")' },
    { backgroundImage: 'url("signs/aquarius.jpg")' },
    { backgroundImage: 'url("signs/pisces.jpg")' },
  ];

  const constelationClass = [
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
  ];

  function checkExists() {
    if (signNumber(sign) === undefined) {
      return "panelsign empty";
    } else {
      return constelationClass[signNumber(sign)];
    }
  }

  function checkExistsTwo() {
    if (signNumber(sign) === undefined) {
      return "paneldescription emptier";
    } else {
      return "paneldescription dropcap";
    }
  }

  function logstuff() {
    console.log(signNumber(sign));
  }

  const panelTitle = () =>
    signNumber(sign) === undefined ? planet : "Natal " + planet + " in " + sign;

  const planetDescription = () =>
    signNumber(sign) === undefined
      ? "Please enter a birth date"
      : ReactHtmlParser(planetData[signNumber(sign)][planet]);

  return (
    <div>
      <div className="panelsigncontainer">
        <div className={checkExists()} style={constelationImages[signNumber(sign)]}></div>
        <img src={planetImage} className="panelplanet" />
      </div>

      <div className="paneltitle">{panelTitle()}</div>
      <div className={checkExistsTwo()}>
        <p>{planetDescription()}</p>
      </div>
    </div>
  );
}

export default PlanetPanel;
