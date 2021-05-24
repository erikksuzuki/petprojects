import React from "react";

export default function ZodiacSign(props) {
  const className = props.className;
  const style = props.style;
  const sign = props.sign;
  const signList = {
    Aries: "♈",
    Taurus: "♉",
    Gemini: "♊",
    Cancer: "♋",
    Leo: "♌",
    Virgo: "♍",
    Libra: "♎",
    Scorpio: "♏",
    Sagittarius: "♐",
    Capricorn: "♑",
    Aquarius: "♒",
    Pisces: "♓"
  };
  if (signList[sign]) {
    return (
      <span className={className} style={style}>
        <span style={{ fontFamily: "Cardo" }}>{signList[sign]}</span>
      </span>
    );
  } else {
    return "![Invalid Zodiac Sign]";
  }
}
