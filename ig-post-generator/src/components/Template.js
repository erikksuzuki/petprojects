import React from "react";

function Template(props) {
  const bgcolor = props.bgcolor;
  const textcolor = props.textcolor;
  const headercolor = props.headercolor;
  return (
    <div className="template" style={{ backgroundColor: bgcolor, color: textcolor }}>
      <div
        className="heading"
        style={{ fontFamily: "Jost", fontSize: "140px", color: headercolor }}
      >
        Bold text here
      </div>
    </div>
  );
}

export default Template;
