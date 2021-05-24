import { imageList } from "./getCardImage";

export default function getCardIndex(cardKey) {
  const match = (element) => element === cardKey;
  const index = Object.keys(imageList).findIndex(match) + 1;
  return index;
}
