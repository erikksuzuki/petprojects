import React from "react";

export default function PlanetSymbol(props) {
  const className = props.className;
  const style = props.style;
  const planet = props.planet;
  const planetList = {
    Sun: "☉",
    Moon: "☾",
    Mercury: "☿",
    Venus: "♀",
    Mars: "♂",
    Jupiter: "♃",
    Saturn: "♄",
    Uranus: "♅",
    Neptune: "♆",
    Pluto: "♇"
  };
  if (planetList[planet]) {
    return (
      <span className={className} style={style}>
        <span style={{ fontFamily: "Cardo" }}>{planetList[planet]}</span>
      </span>
    );
  } else {
    return "![Invalid Planet]";
  }
}
