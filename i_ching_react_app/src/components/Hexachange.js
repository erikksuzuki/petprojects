import React from "react";
import ReactHtmlParser from "react-html-parser";

function Hexachange(props) {
  var hexastringprop = props.string;

  function getAdvancedHexapicChanged(string) {
    let hexastring = string;
    let stringlineone = hexastring.charAt(0);
    let stringlinetwo = hexastring.charAt(1);
    let stringlinethree = hexastring.charAt(2);
    let stringlinefour = hexastring.charAt(3);
    let stringlinefive = hexastring.charAt(4);
    let stringlinetop = hexastring.charAt(5);
    let advancedpic =
      drawlineAdvancedChanged(stringlinetop) +
      drawlineAdvancedChanged(stringlinefive) +
      drawlineAdvancedChanged(stringlinefour) +
      drawlineAdvancedChanged(stringlinethree) +
      drawlineAdvancedChanged(stringlinetwo) +
      drawlineAdvancedChanged(stringlineone);
    return advancedpic;
  }

  function drawlineAdvancedChanged(letter) {
    var vector;
    if (letter === "B") {
      vector = '<div class="advancedline"></div>';
    }
    if (letter === "V") {
      vector = '<div class="advancedline"></div>';
    }
    if (letter === "P") {
      vector =
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    if (letter === "W") {
      vector =
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    return vector;
  }

  console.log("passed string = " + hexastringprop);
  return (
    <div className="advancedpiccontainer">
      {ReactHtmlParser(getAdvancedHexapicChanged(hexastringprop))}
    </div>
  );
}

export default Hexachange;
