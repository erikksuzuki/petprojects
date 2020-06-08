function GetNumber(string) {
  const unchanged = () => {
    let convertedstring = string;
    for (let i = 0; i < 6; i++) {
      convertedstring = convertedstring.replace("B", "P");
      convertedstring = convertedstring.replace("W", "V");
    }
    return guaNumber(convertedstring);
  };
  const changed = () => {
    let convertedstring = string;
    for (let i = 0; i < 6; i++) {
      convertedstring = convertedstring.replace("B", "V");
      convertedstring = convertedstring.replace("W", "P");
    }
    return guaNumber(convertedstring);
  };
  const guaNumber = (newstring) =>
    ({
      VVVVVV: 1,
      PPPPPP: 2,
      VPPPVP: 3,
      PVPPPV: 4,
      VVVPVP: 5,
      PVPVVV: 6,
      PVPPPP: 7,
      PPPPVP: 8,
      VVVPVV: 9,
      VVPVVV: 10,
      VVVPPP: 11,
      PPPVVV: 12,
      VPVVVV: 13,
      VVVVPV: 14,
      PPVPPP: 15,
      PPPVPP: 16,
      VPPVVP: 17,
      PVVPPV: 18,
      VVPPPP: 19,
      PPPPVV: 20,
      VPPVPV: 21,
      VPVPPV: 22,
      PPPPPV: 23,
      VPPPPP: 24,
      VPPVVV: 25,
      VVVPPV: 26,
      VPPPPV: 27,
      PVVVVP: 28,
      PVPPVP: 29,
      VPVVPV: 30,
      PPVVVP: 31,
      PVVVPP: 32,
      PPVVVV: 33,
      VVVVPP: 34,
      PPPVPV: 35,
      VPVPPP: 36,
      VPVPVV: 37,
      VVPVPV: 38,
      PPVPVP: 39,
      PVPVPP: 40,
      VVPPPV: 41,
      VPPPVV: 42,
      VVVVVP: 43,
      PVVVVV: 44,
      PPPVVP: 45,
      PVVPPP: 46,
      PVPVVP: 47,
      PVVPVP: 48,
      VPVVVP: 49,
      PVVVPV: 50,
      VPPVPP: 51,
      PPVPPV: 52,
      PPVPVV: 53,
      VVPVPP: 54,
      VPVVPP: 55,
      PPVVPV: 56,
      PVVPVV: 57,
      VVPVVP: 58,
      PVPPVV: 59,
      VVPPVP: 60,
      VVPPVV: 61,
      PPVVPP: 62,
      VPVPVP: 63,
      PVPVPV: 64,
    }[newstring]);
  return {
    unchanged: unchanged(),
    changed: changed(),
  };
}

export default GetNumber;
