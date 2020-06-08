import React from "react";
import ReactHtmlParser from "react-html-parser";

function Hexachange(props) {
  const drawline = (letter) =>
    ({
      B: '<div class="advancedline"></div>',
      V: '<div class="advancedline"></div>',
      P:
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>',
      W:
        '<div class="advancedlineyin"><div class="yinleft"></div><div class="yinright"></div></div>',
    }[letter]);

  const assembleLines = (string) => {
    return (
      drawline(string.charAt(5)) +
      drawline(string.charAt(4)) +
      drawline(string.charAt(3)) +
      drawline(string.charAt(2)) +
      drawline(string.charAt(1)) +
      drawline(string.charAt(0))
    );
  };

  return (
    <div className={props.className !== undefined ? props.className : "advancedpiccontainer"}>
      {ReactHtmlParser(assembleLines(props.string))}
    </div>
  );
}

export default Hexachange;
