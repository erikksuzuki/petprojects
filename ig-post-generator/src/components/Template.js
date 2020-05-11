import React from "react";

function Template(props) {
  const theme = props.theme;
  const title = props.title;
  const subtitle = props.subtitle;
  const topic = props.topic;
  const content = props.content;
  const layout = props.layout;

  const permatitle = () => (title == "" ? "Title" : title);

  const logo = () => {
    if (theme === "theme-one") {
      return "logowhite.png";
    }
    if (theme === "theme-two") {
      return "logowhitetransparent.png";
    }
    if (theme === "theme-three") {
      return "logowhitetransparent.png";
    }
    if (theme === "theme-four") {
      return "logowhitetransparent.png";
    }
    if (theme === "theme-five") {
      return "logowhitetransparent.png";
    }
    if (theme === "theme-six") {
      return "logoblack.png";
    }
  };
  return (
    <div className={theme}>
      <div className={layout}>
        <div className="logo">
          <img src={logo()} />
        </div>
        <div className="heading">{permatitle()}</div>
        <div className="subheading">{subtitle}</div>

        <div className="innercontent">{content}</div>

        <div className="usertag">@jobhackr</div>
        <div className="topictag">{topic}</div>
      </div>
    </div>
  );
}

export default Template;
