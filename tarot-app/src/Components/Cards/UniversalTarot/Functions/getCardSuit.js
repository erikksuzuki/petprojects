export default function getCardSuit(cardKey) {
  const keyToValue = {
    W: "clubs",
    C: "hearts",
    S: "spades",
    D: "diamonds"
  };
  if (cardKey.charAt(1) === "I") {
    return keyToValue[cardKey.charAt(4)];
  } else if (cardKey.charAt(1) === "A") {
    return "Major Arcana";
  }
}
