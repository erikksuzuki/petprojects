import React from "react";
import ReactHtmlParser from "react-html-parser";

function Hexachange(props) {
  var hexastringprop = props.string;

  function drawlineAdvancedChanged(letter) {
    var vector;
    if (letter == "B") {
      vector = '<div class="advancedline"></div>';
    }
    if (letter == "V") {
      vector = '<div class="advancedline"></div>';
    }
    if (letter == "P") {
      vector =
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    if (letter == "W") {
      vector =
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    return vector;
  }

  function getAdvancedHexapicChanged(string) {
    let hexastring = string;
    let advancedpic =
      drawlineAdvancedChanged(hexastring.charAt(5)) +
      drawlineAdvancedChanged(hexastring.charAt(4)) +
      drawlineAdvancedChanged(hexastring.charAt(3)) +
      drawlineAdvancedChanged(hexastring.charAt(2)) +
      drawlineAdvancedChanged(hexastring.charAt(1)) +
      drawlineAdvancedChanged(hexastring.charAt(0));
    return advancedpic;
  }

  return (
    <div className="advancedpiccontainer">
      {ReactHtmlParser(getAdvancedHexapicChanged(hexastringprop))}
    </div>
  );
}

export default Hexachange;
