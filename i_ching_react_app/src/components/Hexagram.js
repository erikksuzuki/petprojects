import React from "react";
import ReactHtmlParser from "react-html-parser";

function Hexagram(props) {
  var hexastringprop = props.string;

  function drawlineAdvanced(letter) {
    let vector;
    if (letter == "B") {
      vector =
        '<div class="advancedlineyinchange"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    if (letter == "V") {
      vector = '<div class="advancedline"></div>';
    }
    if (letter == "P") {
      vector =
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    if (letter == "W") {
      vector = '<div class="advancedlinechange"></div>';
    }
    return vector;
  }

  function getAdvancedHexapic(string) {
    let hexastring = string;
    let advancedpic =
      drawlineAdvanced(hexastring.charAt(5)) +
      drawlineAdvanced(hexastring.charAt(4)) +
      drawlineAdvanced(hexastring.charAt(3)) +
      drawlineAdvanced(hexastring.charAt(2)) +
      drawlineAdvanced(hexastring.charAt(1)) +
      drawlineAdvanced(hexastring.charAt(0));
    return advancedpic;
  }

  return (
    <div className="advancedpiccontainer">
      {ReactHtmlParser(getAdvancedHexapic(hexastringprop))}
    </div>
  );
}

export default Hexagram;
