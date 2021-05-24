export const cardFlipAnimation = {
  flipCardContainer: {
    width: "100%",
    position: "relative",
    perspective: "1000px",
    cursor: "pointer"
  },
  flipCard: {
    position: "relative",
    width: "100%",
    transition: "transform 1s",
    transformStyle: "preserve-3d",
    borderRadius: "3%",
    boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.6)"
  },
  flipCardFlipped: {
    position: "relative",
    width: "100%",
    transition: "transform 1s",
    transformStyle: "preserve-3d",
    borderRadius: "3%",
    boxShadow: "5px 5px 15px 0px rgba(0,0,0,0.6)"
  },
  flipCardFront: {
    position: "absolute",
    width: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  flipCardBack: {
    position: "absolute",
    width: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotateY(180deg)"
  }
};
