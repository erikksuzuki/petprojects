import React from "react";

function Template(props) {
  const theme = props.theme;
  const title = props.title;
  const subtitle = props.subtitle;
  const topic = props.topic;

  const permatitle = () => (title == "" ? "Title" : title);

  const logo = () => {
    if (3 > 1) {
      return "../public/logowhite.png";
    }
  };
  return (
    <div className={theme}>
      <div className="logo">
        <img src="logowhite.png" />
      </div>
      <div className="heading">{permatitle()}</div>
      <div className="subheading">{subtitle}</div>

      <div className="usertag">@jobhackr</div>
      <div className="topictag">{topic}</div>
    </div>
  );
}

export default Template;
