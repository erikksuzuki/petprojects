import React from "react";
import GetNumber from "./GetNumber";
import GetNumberChanged from "./GetNumberChanged";
import { HEXAGRAMS } from "../shared/hexagramdetails";
import ReactHtmlParser from "react-html-parser";

function Descriptions(props) {
  var passedproperty = props;
  var hexastringprop = props.string;
  var hexanumber = GetNumber(passedproperty);
  var hexanumberchanged = GetNumberChanged(passedproperty);

  var hexatitle = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].name;
  var hexadescription = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].description;
  var hexalineone = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_one;
  var hexalinetwo = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_two;
  var hexalinethree = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_three;
  var hexalinefour = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_four;
  var hexalinefive = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_five;
  var hexalinesix = HEXAGRAMS.filter((x) => x.id === hexanumber)[0].line_six;

  var hexatitlechanged = HEXAGRAMS.filter((x) => x.id === hexanumberchanged)[0].name;
  var hexachangeddescription = HEXAGRAMS.filter((x) => x.id === hexanumberchanged)[0].description;

  return (
    <div>
      <h3>{hexatitle}</h3>
      <div className="descriptiontext">
        <p>{ReactHtmlParser(hexadescription)}</p>
        <div>
          {hexastringprop.charAt(5) === "B" || hexastringprop.charAt(5) === "W"
            ? ReactHtmlParser('<div class="lineheader">Changing Line Top</div>')
            : null}
        </div>
        <p>
          {hexastringprop.charAt(5) === "B" || hexastringprop.charAt(5) === "W"
            ? ReactHtmlParser(hexalinesix)
            : null}
        </p>
        <div>
          {hexastringprop.charAt(4) === "B" || hexastringprop.charAt(4) === "W"
            ? ReactHtmlParser('<div class="lineheader">Changing Line 5</div>')
            : null}
        </div>
        <p>
          {hexastringprop.charAt(4) === "B" || hexastringprop.charAt(4) === "W"
            ? ReactHtmlParser(hexalinefive)
            : null}
        </p>
        <div>
          {hexastringprop.charAt(3) === "B" || hexastringprop.charAt(3) === "W"
            ? ReactHtmlParser('<div class="lineheader">Changing Line 4</div>')
            : null}
        </div>
        <p>
          {hexastringprop.charAt(3) === "B" || hexastringprop.charAt(3) === "W"
            ? ReactHtmlParser(hexalinefour)
            : null}
        </p>
        <div>
          {hexastringprop.charAt(2) === "B" || hexastringprop.charAt(2) === "W"
            ? ReactHtmlParser('<div class="lineheader">Changing Line 3</div>')
            : null}
        </div>
        <p>
          {hexastringprop.charAt(2) === "B" || hexastringprop.charAt(2) === "W"
            ? ReactHtmlParser(hexalinethree)
            : null}
        </p>
        <div>
          {hexastringprop.charAt(1) === "B" || hexastringprop.charAt(1) === "W"
            ? ReactHtmlParser('<div class="lineheader">Changing Line 2</div>')
            : null}
        </div>
        <p>
          {hexastringprop.charAt(1) === "B" || hexastringprop.charAt(1) === "W"
            ? ReactHtmlParser(hexalinetwo)
            : null}
        </p>
        <div>
          {hexastringprop.charAt(0) === "B" || hexastringprop.charAt(0) === "W"
            ? ReactHtmlParser('<div class="lineheader">Changing Line 1</div>')
            : null}
        </div>
        <p>
          {hexastringprop.charAt(0) === "B" || hexastringprop.charAt(0) === "W"
            ? ReactHtmlParser(hexalineone)
            : null}
        </p>
      </div>
      <h3>
        {hexanumber === hexanumberchanged ? null : ReactHtmlParser("<br><br>" + hexatitlechanged)}
      </h3>
      <div className="descriptiontext">
        <p>{hexanumber === hexanumberchanged ? null : ReactHtmlParser(hexachangeddescription)}</p>
      </div>
    </div>
  );
}

export default Descriptions;
