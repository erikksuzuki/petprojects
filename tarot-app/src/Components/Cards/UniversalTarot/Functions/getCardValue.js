export default function getCardValue(cardKey) {
  const keyToValue = {
    A: "Ace",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    0: "Ten",
    K: "King",
    Q: "Queen",
    J: "Knave"
  };
  if (cardKey.charAt(1) === "I") {
    return keyToValue[cardKey.charAt(3)];
  } else if (cardKey.charAt(1) === "A") {
    return cardKey.split("_")[1];
  }
}
