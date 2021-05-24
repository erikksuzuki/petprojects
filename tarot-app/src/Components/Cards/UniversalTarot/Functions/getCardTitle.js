import getCardValue from "./getCardValue";
import getCardSuit from "./getCardSuit";

export default function getCardTitle(cardKey) {
  const cardSuit = () => {
    const nameList = {
      clubs: "Wands",
      hearts: "Cups",
      spades: "Swords",
      diamonds: "Discs"
    };
    if (nameList[getCardSuit(cardKey)]) {
      return nameList[getCardSuit(cardKey)];
    } else {
      return "";
    }
  };

  const majorArcanaNameList = {
    0: "The Fool",
    I: "The Magician",
    II: "The Priestess",
    III: "The Empress",
    IV: "The Emperor",
    V: "The Hierophant",
    VI: "The Lovers",
    VII: "The Chariot",
    VIII: "Desire",
    IX: "The Hermit",
    X: "The Wheel of Fortune",
    XI: "Karma",
    XII: "The Hanged Man",
    XIII: "Death",
    XIV: "Time",
    XV: "The Devil",
    XVI: "The Tower",
    XVII: "The Star",
    XVIII: "The Moon",
    XIX: "The Sun",
    XX: "The Revelation",
    XXI: "The Universe"
  };

  if (cardKey.charAt(1) === "I") {
    return getCardValue(cardKey) + " of " + cardSuit();
  } else if (cardKey.charAt(1) === "A") {
    return (
      getCardValue(cardKey) + ". " + majorArcanaNameList[getCardValue(cardKey)]
    );
  }
}
