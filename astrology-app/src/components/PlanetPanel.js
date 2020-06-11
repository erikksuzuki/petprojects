import React from "react";
import { planetData } from "../shared/planetData";
import ReactHtmlParser from "react-html-parser";
import { makeStyles } from "@material-ui/core/styles";

import Skeleton from "@material-ui/lab/Skeleton";

import GetPlanetAspects from "./GetPlanetAspects";

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

  // data and methods for constelation image
  const panelsignClass = () =>
    signNumber(sign) === undefined ? "panelsign empty" : constelationClass[signNumber(sign)];
  const leftarrowClass = () => (props.currenttab <= 5 ? "leftarrow" : "leftarrow disabled");
  const rightarrowClass = () => (props.currenttab >= 1 ? "rightarrow" : "rightarrow disabled");
  function handleChangeLeft() {
    if (props.currenttab <= 5) {
      return props.onChange(props.currenttab + 1);
    } else {
      return null;
    }
  }
  function handleChangeRight() {
    if (props.currenttab >= 1) {
      return props.onChange(props.currenttab - 1);
    } else {
      return null;
    }
  }

  // data and methods for planet and sign descriptions
  const panelTitle = () =>
    signNumber(sign) === undefined ? planet : "Natal " + planet + " in " + sign;
  const planetDescription = () => {
    let message;
    if (props.isFetching) {
      message = "Loading data...";
    } else {
      signNumber(sign) === undefined
        ? (message = "Please enter a birth date")
        : (message = ReactHtmlParser(planetData[signNumber(sign)][planet]));
    }
    return message;
  };
  const paneldescriptionClass = () =>
    signNumber(sign) === undefined ? "paneldescription emptier" : "paneldescription dropcap";

  // data and methods for planet aspects
  const aspectList = GetPlanetAspects(props.planetsQuery, planet);
  function RenderAspects({ aspect }) {
    return (
      <div>
        <div className={"aspecttitle " + aspect[3].toLowerCase()}>{aspect[0]}</div>
        <div className="aspectcontent">
          <p>
            {aspect[2]} {aspect[1]}
          </p>
        </div>
      </div>
    );
  }

  function RenderLoader() {
    if (props.isFetching) {
      return <Skeleton variant="circle" animation="wave" width={185} height={185} />;
    } else {
      return null;
    }
  }

  return (
    <div>
      <div className="panelsigncontainer">
        <div className={panelsignClass()} style={constelationImages[signNumber(sign)]}>
          <RenderLoader />
        </div>
        <img src={planetImage} className="panelplanet" />
        <img src="leftarrow.png" className={leftarrowClass()} onClick={handleChangeLeft} />
        <img src="rightarrow.png" className={rightarrowClass()} onClick={handleChangeRight} />
      </div>

      <div className="paneltitle">{panelTitle()}</div>
      <div className={paneldescriptionClass()}>
        <p>{planetDescription()}</p>
      </div>
      {aspectList.map((aspect) => {
        return <RenderAspects aspect={aspect} />;
      })}
    </div>
  );
}

export default PlanetPanel;
