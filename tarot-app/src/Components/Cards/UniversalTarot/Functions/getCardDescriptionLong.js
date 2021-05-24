export const descriptionList = {
  // Wands
  MI_AW: [
    "Aces always stand for great power, but power in its latent form – the seed or root of great possibilities, of great force waiting to be expressed. Wands represent one’s spiritual aspirations, creative energy, hopes and desires. They are the symbol of ambition, enthusiasm and enterprise, but focused on the higher aspects of life, not the mundane.",
    "The natural tendency of the human soul is to evolve, to become more conscious, to fly, to grow and realize the fullness of Self. This is what the Ace of Wands is all about. However, the emphasis is on natural force as opposed to invoked force. This means that power comes naturally when one is in tune with self and environment, and not blindly trying to force one’s own desires to become reality.",
    "The image of the wand here shows a figure in the process of breaking free, discovering his wings, ready to soar to the heights of his being. His navel bears the blood-red triangle of the manipura chakra, the seat of the will, but this relationship to will is very subtle. It is the will in tune with natural power. The ghost of this triangular symbol is formed again by his arms and head, as he prepares to transcend his limitations and fly. The whole image is one of an adapted caduceus of creative fire. The serpent or Kundalini power passes through the lower chakras and now the aspirant is at the point of leaping the abyss, to the higher chakras, towards fulfilment."
  ],
  MI_2W: ["", "", "", "", "", "", "", "", "", ""],
  MI_3W: ["", "", "", "", "", "", "", "", "", ""],
  MI_4W: ["", "", "", "", "", "", "", "", "", ""],
  MI_5W: ["", "", "", "", "", "", "", "", "", ""],
  MI_6W: ["", "", "", "", "", "", "", "", "", ""],
  MI_7W: ["", "", "", "", "", "", "", "", "", ""],
  MI_8W: ["", "", "", "", "", "", "", "", "", ""],
  MI_9W: ["", "", "", "", "", "", "", "", "", ""],
  MI_0W: ["", "", "", "", "", "", "", "", "", ""],
  MI_KW: ["", "", "", "", "", "", "", "", "", ""],
  MI_QW: ["", "", "", "", "", "", "", "", "", ""],
  MI_JW: ["", "", "", "", "", "", "", "", "", ""],

  // Cups
  MI_AC: ["", "", "", "", "", "", "", "", "", ""],
  MI_2C: ["", "", "", "", "", "", "", "", "", ""],
  MI_3C: ["", "", "", "", "", "", "", "", "", ""],
  MI_4C: ["", "", "", "", "", "", "", "", "", ""],
  MI_5C: ["", "", "", "", "", "", "", "", "", ""],
  MI_6C: ["", "", "", "", "", "", "", "", "", ""],
  MI_7C: ["", "", "", "", "", "", "", "", "", ""],
  MI_8C: ["", "", "", "", "", "", "", "", "", ""],
  MI_9C: ["", "", "", "", "", "", "", "", "", ""],
  MI_0C: ["", "", "", "", "", "", "", "", "", ""],
  MI_KC: ["", "", "", "", "", "", "", "", "", ""],
  MI_QC: ["", "", "", "", "", "", "", "", "", ""],
  MI_JC: ["", "", "", "", "", "", "", "", "", ""],

  // Swords
  MI_AS: ["", "", "", "", "", "", "", "", "", ""],
  MI_2S: ["", "", "", "", "", "", "", "", "", ""],
  MI_3S: ["", "", "", "", "", "", "", "", "", ""],
  MI_4S: ["", "", "", "", "", "", "", "", "", ""],
  MI_5S: ["", "", "", "", "", "", "", "", "", ""],
  MI_6S: ["", "", "", "", "", "", "", "", "", ""],
  MI_7S: ["", "", "", "", "", "", "", "", "", ""],
  MI_8S: ["", "", "", "", "", "", "", "", "", ""],
  MI_9S: ["", "", "", "", "", "", "", "", "", ""],
  MI_0S: ["", "", "", "", "", "", "", "", "", ""],
  MI_KS: ["", "", "", "", "", "", "", "", "", ""],
  MI_QS: ["", "", "", "", "", "", "", "", "", ""],
  MI_JS: ["", "", "", "", "", "", "", "", "", ""],

  // Discs
  MI_AD: ["", "", "", "", "", "", "", "", "", ""],
  MI_2D: ["", "", "", "", "", "", "", "", "", ""],
  MI_3D: ["", "", "", "", "", "", "", "", "", ""],
  MI_4D: ["", "", "", "", "", "", "", "", "", ""],
  MI_5D: ["", "", "", "", "", "", "", "", "", ""],
  MI_6D: ["", "", "", "", "", "", "", "", "", ""],
  MI_7D: ["", "", "", "", "", "", "", "", "", ""],
  MI_8D: ["", "", "", "", "", "", "", "", "", ""],
  MI_9D: ["", "", "", "", "", "", "", "", "", ""],
  MI_0D: ["", "", "", "", "", "", "", "", "", ""],
  MI_KD: ["", "", "", "", "", "", "", "", "", ""],
  MI_QD: ["", "", "", "", "", "", "", "", "", ""],
  MI_JD: ["", "", "", "", "", "", "", "", "", ""],

  // Major Arcana
  MA_0: ["", "", "", "", "", "", "", "", "", ""],
  MA_I: ["", "", "", "", "", "", "", "", "", ""],
  MA_II: ["", "", "", "", "", "", "", "", "", ""],
  MA_III: ["", "", "", "", "", "", "", "", "", ""],
  MA_IV: ["", "", "", "", "", "", "", "", "", ""],
  MA_V: ["", "", "", "", "", "", "", "", "", ""],
  MA_VI: ["", "", "", "", "", "", "", "", "", ""],
  MA_VII: ["", "", "", "", "", "", "", "", "", ""],
  MA_VIII: ["", "", "", "", "", "", "", "", "", ""],
  MA_IX: ["", "", "", "", "", "", "", "", "", ""],
  MA_X: ["", "", "", "", "", "", "", "", "", ""],
  MA_XI: ["", "", "", "", "", "", "", "", "", ""],
  MA_XII: ["", "", "", "", "", "", "", "", "", ""],
  MA_XIII: ["", "", "", "", "", "", "", "", "", ""],
  MA_XIV: ["", "", "", "", "", "", "", "", "", ""],
  MA_XV: ["", "", "", "", "", "", "", "", "", ""],
  MA_XVI: ["", "", "", "", "", "", "", "", "", ""],
  MA_XVII: ["", "", "", "", "", "", "", "", "", ""],
  MA_XVIII: ["", "", "", "", "", "", "", "", "", ""],
  MA_XIX: ["", "", "", "", "", "", "", "", "", ""],
  MA_XX: ["", "", "", "", "", "", "", "", "", ""],
  MA_XXI: ["", "", "", "", "", "", "", "", "", ""]
};

export default function getCardDescriptionLong(cardKey) {
  if (descriptionList[cardKey]) {
    return descriptionList[cardKey];
  } else {
    return "";
  }
}
