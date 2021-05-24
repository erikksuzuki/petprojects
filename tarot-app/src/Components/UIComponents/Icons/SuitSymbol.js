export default function SuitSymbol(props) {
  const className = props.className;
  const style = props.style;
  const suit = props.suit;
  const suitList = {
    clubs: "♣",
    hearts: "♥",
    spades: "♠",
    diamonds: "♦",
    "Major Arcana": "✪"
  };
  if (suitList[suit]) {
    return (
      <span className={className} style={style}>
        <span
          style={
            suit === "Major Arcana"
              ? {
                  fontFamily: "Sawarabi Gothic",
                  fontSize: "1.2rem",
                  lineHeight: "0.5rem"
                }
              : { fontFamily: "RocknRoll One" }
          }
        >
          {suitList[suit]}
        </span>
      </span>
    );
  } else {
    return "![Invalid Suit]";
  }
}
