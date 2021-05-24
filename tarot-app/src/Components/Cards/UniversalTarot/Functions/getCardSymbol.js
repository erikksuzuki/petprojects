export const symbolList = {
  // Wands
  MI_AW: "Power of Fire",
  MI_2W: "Mars in Aries",
  MI_3W: "Sun in Aries",
  MI_4W: "Venus in Aries",
  MI_5W: "Saturn in Leo",
  MI_6W: "Jupiter in Leo",
  MI_7W: "Mars in Leo",
  MI_8W: "Mercury in Sagittarius",
  MI_9W: "Moon in Sagittarius",
  MI_0W: "Saturn in Sagittarius",
  MI_KW: "Sagittarius",
  MI_QW: "Aries",
  MI_JW: "Leo",

  // Cups
  MI_AC: "Power of Water",
  MI_2C: "Venus in Cancer",
  MI_3C: "Mercury in Cancer",
  MI_4C: "Moon in Cancer",
  MI_5C: "Mars in Scorpio",
  MI_6C: "Sun in Scorpio",
  MI_7C: "Venus in Scorpio",
  MI_8C: "Saturn in Pisces",
  MI_9C: "Jupiter in Pisces",
  MI_0C: "Mars in Pisces",
  MI_KC: "Pisces",
  MI_QC: "Cancer",
  MI_JC: "Scorpio",

  // Swords
  MI_AS: "Power of Air",
  MI_2S: "Moon in Libra",
  MI_3S: "Saturn in Libra",
  MI_4S: "Jupiter in Libra",
  MI_5S: "Venus in Aquarius",
  MI_6S: "Mercury in Aquarius",
  MI_7S: "Moon in Aquarius",
  MI_8S: "Jupiter in Gemini",
  MI_9S: "Mars in Gemini",
  MI_0S: "Sun in Gemini",
  MI_KS: "Gemini",
  MI_QS: "Libra",
  MI_JS: "Aquarius",

  // Discs
  MI_AD: "Power of Earth",
  MI_2D: "Jupiter in Capricorn",
  MI_3D: "Mars in Capricorn",
  MI_4D: "Sun in Capricorn",
  MI_5D: "Mercury in Taurus",
  MI_6D: "Moon in Taurus",
  MI_7D: "Saturn in Taurus",
  MI_8D: "Sun in Virgo",
  MI_9D: "Venus in Virgo",
  MI_0D: "Mercury in Virgo",
  MI_KD: "Virgo",
  MI_QD: "Capricorn",
  MI_JD: "Taurus",

  // Major Arcana
  MA_0: "Air",
  MA_I: "Mercury",
  MA_II: "Moon",
  MA_III: "Venus",
  MA_IV: "Aries",
  MA_V: "Taurus",
  MA_VI: "Gemini",
  MA_VII: "Cancer",
  MA_VIII: "Leo",
  MA_IX: "Virgo",
  MA_X: "Jupiter",
  MA_XI: "Libra",
  MA_XII: "Water",
  MA_XIII: "Scorpio",
  MA_XIV: "Sagittarius",
  MA_XV: "Capricorn",
  MA_XVI: "Mars",
  MA_XVII: "Aquarius",
  MA_XVIII: "Pisces",
  MA_XIX: "Sun",
  MA_XX: "Fire",
  MA_XXI: "Saturn"
};

export default function getCardSymbol(cardKey) {
  if (symbolList[cardKey]) {
    return symbolList[cardKey];
  } else {
    return "";
  }
}
