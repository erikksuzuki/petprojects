import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function PlanetPanel(props) {
  const planet = props.planet;
  const sign = props.sign;

  const signNumber = (sign) =>
    ({
      Mesha: 0,
      Vrishabha: 1,
      Mithuna: 2,
      Karka: 3,
      Simha: 4,
      Kanya: 5,
      Tula: 6,
      Vrischika: 7,
      Dhanu: 8,
      Makara: 9,
      Kumbha: 10,
      Meena: 11,
    }[sign]);

  const planetImage = "planets/" + planet + ".png";

  const constelationImages = [
    { backgroundImage: 'url("signs/aries.png")' },
    { backgroundImage: 'url("signs/taurus.png")' },
    { backgroundImage: 'url("signs/gemini.png")' },
    { backgroundImage: 'url("signs/cancer.png")' },
    { backgroundImage: 'url("signs/leo.png")' },
    { backgroundImage: 'url("signs/virgo.png")' },
    { backgroundImage: 'url("signs/libra.png")' },
    { backgroundImage: 'url("signs/scorpio.png")' },
    { backgroundImage: 'url("signs/sagittarius.png")' },
    { backgroundImage: 'url("signs/capricorn.png")' },
    { backgroundImage: 'url("signs/aquarius.png")' },
    { backgroundImage: 'url("signs/pisces.png")' },
  ];

  const constelationClass = [
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
    "panelsign fire",
    "panelsign earth",
    "panelsign air",
    "panelsign water",
  ];

  function logstuff() {
    console.log(signNumber(sign));
  }

  return (
    <div>
      <div className="panelsigncontainer">
        <div
          className={constelationClass[signNumber(sign)]}
          style={constelationImages[signNumber(sign)]}
        ></div>
        <img src={planetImage} className="panelplanet" />
      </div>

      <div className="paneltitle">
        Natal {planet} in {sign}
      </div>
      <div className="paneldescription">
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
          libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
          ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
          tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
          cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id
          est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam
          libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
          maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
          ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic
          tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat.
        </p>
        <a onClick={logstuff} style={{ cursor: "pointer" }}>
          Click to see log
        </a>
      </div>
    </div>
  );
}

export default PlanetPanel;
