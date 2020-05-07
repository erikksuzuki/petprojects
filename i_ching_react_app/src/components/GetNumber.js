function GetNumber(props) {
  var hexastringprop = props.string;
  function getNumber(hexvalue) {
    var hexanumber;
    if (hexvalue === "VVVVVV") {
      hexanumber = 1;
    }
    if (hexvalue === "PPPPPP") {
      hexanumber = 2;
    }
    if (hexvalue === "VPPPVP") {
      hexanumber = 3;
    }
    if (hexvalue === "PVPPPV") {
      hexanumber = 4;
    }
    if (hexvalue === "VVVPVP") {
      hexanumber = 5;
    }
    if (hexvalue === "PVPVVV") {
      hexanumber = 6;
    }
    if (hexvalue === "PVPPPP") {
      hexanumber = 7;
    }
    if (hexvalue === "PPPPVP") {
      hexanumber = 8;
    }
    if (hexvalue === "VVVPVV") {
      hexanumber = 9;
    }
    if (hexvalue === "VVPVVV") {
      hexanumber = 10;
    }
    if (hexvalue === "VVVPPP") {
      hexanumber = 11;
    }
    if (hexvalue === "PPPVVV") {
      hexanumber = 12;
    }
    if (hexvalue === "VPVVVV") {
      hexanumber = 13;
    }
    if (hexvalue === "VVVVPV") {
      hexanumber = 14;
    }
    if (hexvalue === "PPVPPP") {
      hexanumber = 15;
    }
    if (hexvalue === "PPPVPP") {
      hexanumber = 16;
    }
    if (hexvalue === "VPPVVP") {
      hexanumber = 17;
    }
    if (hexvalue === "PVVPPV") {
      hexanumber = 18;
    }
    if (hexvalue === "VVPPPP") {
      hexanumber = 19;
    }
    if (hexvalue === "PPPPVV") {
      hexanumber = 20;
    }
    if (hexvalue === "VPPVPV") {
      hexanumber = 21;
    }
    if (hexvalue === "VPVPPV") {
      hexanumber = 22;
    }
    if (hexvalue === "PPPPPV") {
      hexanumber = 23;
    }
    if (hexvalue === "VPPPPP") {
      hexanumber = 24;
    }
    if (hexvalue === "VPPVVV") {
      hexanumber = 25;
    }
    if (hexvalue === "VVVPPV") {
      hexanumber = 26;
    }
    if (hexvalue === "VPPPPV") {
      hexanumber = 27;
    }
    if (hexvalue === "PVVVVP") {
      hexanumber = 28;
    }
    if (hexvalue === "PVPPVP") {
      hexanumber = 29;
    }
    if (hexvalue === "VPVVPV") {
      hexanumber = 30;
    }
    if (hexvalue === "PPVVVP") {
      hexanumber = 31;
    }
    if (hexvalue === "PVVVPP") {
      hexanumber = 32;
    }
    if (hexvalue === "PPVVVV") {
      hexanumber = 33;
    }
    if (hexvalue === "VVVVPP") {
      hexanumber = 34;
    }
    if (hexvalue === "PPPVPV") {
      hexanumber = 35;
    }
    if (hexvalue === "VPVPPP") {
      hexanumber = 36;
    }
    if (hexvalue === "VPVPVV") {
      hexanumber = 37;
    }
    if (hexvalue === "VVPVPV") {
      hexanumber = 38;
    }
    if (hexvalue === "PPVPVP") {
      hexanumber = 39;
    }
    if (hexvalue === "PVPVPP") {
      hexanumber = 40;
    }
    if (hexvalue === "VVPPPV") {
      hexanumber = 41;
    }
    if (hexvalue === "VPPPVV") {
      hexanumber = 42;
    }
    if (hexvalue === "VVVVVP") {
      hexanumber = 43;
    }
    if (hexvalue === "PVVVVV") {
      hexanumber = 44;
    }
    if (hexvalue === "PPPVVP") {
      hexanumber = 45;
    }
    if (hexvalue === "PVVPPP") {
      hexanumber = 46;
    }
    if (hexvalue === "PVPVVP") {
      hexanumber = 47;
    }
    if (hexvalue === "PVVPVP") {
      hexanumber = 48;
    }
    if (hexvalue === "VPVVVP") {
      hexanumber = 49;
    }
    if (hexvalue === "PVVVPV") {
      hexanumber = 50;
    }
    if (hexvalue === "VPPVPP") {
      hexanumber = 51;
    }
    if (hexvalue === "PPVPPV") {
      hexanumber = 52;
    }
    if (hexvalue === "PPVPVV") {
      hexanumber = 53;
    }
    if (hexvalue === "VVPVPP") {
      hexanumber = 54;
    }
    if (hexvalue === "VPVVPP") {
      hexanumber = 55;
    }
    if (hexvalue === "PPVVPV") {
      hexanumber = 56;
    }
    if (hexvalue === "PVVPVV") {
      hexanumber = 57;
    }
    if (hexvalue === "VVPVVP") {
      hexanumber = 58;
    }
    if (hexvalue === "PVPPVV") {
      hexanumber = 59;
    }
    if (hexvalue === "VVPPVP") {
      hexanumber = 60;
    }
    if (hexvalue === "VVPPVV") {
      hexanumber = 61;
    }
    if (hexvalue === "PPVVPP") {
      hexanumber = 62;
    }
    if (hexvalue === "VPVPVP") {
      hexanumber = 63;
    }
    if (hexvalue === "PVPVPV") {
      hexanumber = 64;
    }
    return hexanumber;
  }

  function hexagramnumber() {
    var gramvalue = hexastringprop;
    for (let i = 0; i < 6; i++) {
      gramvalue = gramvalue.replace("B", "P");
      gramvalue = gramvalue.replace("W", "V");
    }
    return getNumber(gramvalue);
  }

  return hexagramnumber();
}

export default GetNumber;
