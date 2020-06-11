import { aspectData } from "../shared/aspectData";

function GetPlanetAspects(planetdata, planetName) {
  const planetIndex = (planetName) =>
    ({
      Sun: 0,
      Moon: 1,
      Mercury: 2,
      Venus: 3,
      Mars: 4,
      Jupiter: 5,
      Saturn: 6,
    }[planetName]);
  const SkyLocation = (planet) =>
    ({
      Sun: planetdata[0].longitude,
      Moon: planetdata[1].longitude,
      Mercury: planetdata[2].longitude,
      Venus: planetdata[3].longitude,
      Mars: planetdata[4].longitude,
      Jupiter: planetdata[5].longitude,
      Saturn: planetdata[6].longitude,
    }[planet]);
  function GetAspect(degree) {
    if (degree === undefined) {
      return "None";
    } else if (degree >= 0 && degree <= 8) {
      return "Conjunct";
    } else if (degree >= 52 && degree <= 68) {
      return "Sextile";
    } else if (degree >= 112 && degree <= 128) {
      return "Trine";
    } else if (degree >= 82 && degree <= 98) {
      return "Square";
    } else if (degree >= 172 && degree <= 188) {
      return "Opposition";
    } else {
      return "None";
    }
  }
  const totalAspectlist = [
    [
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Moon")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Mercury")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Venus")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Mars")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Jupiter")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Sun") - SkyLocation("Saturn")))),
    ],
    [
      "None",
      GetAspect(Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Mercury")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Venus")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Mars")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Jupiter")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Moon") - SkyLocation("Saturn")))),
    ],
    [
      "None",
      "None",
      GetAspect(Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Venus")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Mars")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Jupiter")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Mercury") - SkyLocation("Saturn")))),
    ],
    [
      "None",
      "None",
      "None",
      GetAspect(Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Mars")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Jupiter")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Venus") - SkyLocation("Saturn")))),
    ],
    [
      "None",
      "None",
      "None",
      "None",
      GetAspect(Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Jupiter")))),
      GetAspect(Math.round(Math.abs(SkyLocation("Mars") - SkyLocation("Saturn")))),
    ],
    [
      "None",
      "None",
      "None",
      "None",
      "None",
      GetAspect(Math.round(Math.abs(SkyLocation("Jupiter") - SkyLocation("Saturn")))),
    ],
    ["None", "None", "None", "None", "None", "None"],
  ];
  function getTitles() {
    const aspectExplanation = (aspect) =>
      ({
        Conjunct:
          "In relation to the Earth, these two celestial bodies were aligned at the time of your birth.",
        Sextile:
          "In relation to the Earth, these two celestial bodies formed a 60-degree angle at the time of your birth.",
        Trine:
          "In relation to the Earth, these two celestial bodies formed a 120-degree angle at the time of your birth.",
        Square:
          "In relation to the Earth, these two celestial bodies formed a 90-degree angle at the time of your birth.",
        Opposition:
          "In relation to the Earth, these two celestial bodies formed a 180-degree angle at the time of your birth.",
      }[aspect]);
    let descriptionarray = [];
    function PushAspect(aspect, index) {
      if (aspect === "None") {
        return null;
      } else if (
        aspect === "Conjunct" ||
        aspect === "Sextile" ||
        aspect === "Trine" ||
        aspect === "Square" ||
        aspect === "Opposition"
      ) {
        descriptionarray.push([
          aspectData[planetIndex(planetName)][aspect][index][0],
          aspectData[planetIndex(planetName)][aspect][index][1],
          aspectExplanation(aspect),
          aspect,
        ]);
      }
    }
    for (let i = 0; i <= 5; i++) {
      PushAspect(totalAspectlist[planetIndex(planetName)][i], [i]);
    }

    return descriptionarray;
  }
  console.log(getTitles());
  return getTitles();
}

export default GetPlanetAspects;
