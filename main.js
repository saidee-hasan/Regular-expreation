let input = document.querySelector(".colorValue");
let rval = document.querySelector(".r");
let gval = document.querySelector(".g");
let bval = document.querySelector(".b");

input.addEventListener("keyup", () => {
  let v = input.value;
  // #FF00FF
  let rex = /#([0-9A-F]{1.2})([0-9A-F]{1.2})([0-9A-F]{1.2})/;
  if (v.length === 4 || v.length === 7) {
    let output = rex.exec(v);
    if (output === null) {
      rval.innerHTML = "Not a Valid Color";
    } else {
      rval.innerHTML = `R : ${getColorValue(output[1])}`;
      gval.innerHTML = `G : ${getColorValue(output[2])}`;
      bval.innerHTML = `B : ${getColorValue(output[3])}`;
    }
  } else {
    rval.innerHTML = "Not a Valid Color";
  }
});

function getColorValue(hex) {
  if (hex.length === 1) {
    hex = hex + hex;
  }
  return parseInt(hex, 16);
}
