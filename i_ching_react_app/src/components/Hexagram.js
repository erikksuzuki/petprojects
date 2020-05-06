import React from "react";
import ReactHtmlParser from "react-html-parser";

function Hexagram(props) {
  var hexastringprop = props.string;

  function getAdvancedHexapic(string) {
    let hexastring = string;
    let stringlineone = hexastring.charAt(0);
    let stringlinetwo = hexastring.charAt(1);
    let stringlinethree = hexastring.charAt(2);
    let stringlinefour = hexastring.charAt(3);
    let stringlinefive = hexastring.charAt(4);
    let stringlinetop = hexastring.charAt(5);
    let advancedpic =
      drawlineAdvanced(stringlinetop) +
      drawlineAdvanced(stringlinefive) +
      drawlineAdvanced(stringlinefour) +
      drawlineAdvanced(stringlinethree) +
      drawlineAdvanced(stringlinetwo) +
      drawlineAdvanced(stringlineone);
    return advancedpic;
  }

  function drawlineAdvanced(letter) {
    let vector;
    if (letter === "B") {
      vector =
        '<div class="advancedlineyinchange"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    if (letter === "V") {
      vector = '<div class="advancedline"></div>';
    }
    if (letter === "P") {
      vector =
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>';
    }
    if (letter === "W") {
      vector = '<div class="advancedlinechange"></div>';
    }
    return vector;
  }

  console.log("passed string = " + hexastringprop);
  return (
    <div className="advancedpiccontainer">
      {ReactHtmlParser(getAdvancedHexapic(hexastringprop))}
    </div>
  );
}

export default Hexagram;
