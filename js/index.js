const output = document.getElementById("output");
const input = document.getElementById("lbsInput");
const gramsOutput = document.getElementById("gramsOutput");
const kgOutput = document.getElementById("kgOutput");
const ozOutput = document.getElementById("ozOutput");
output.style.visibility = "hidden";

function convertWeight(e) {
  output.style.visibility = "visible";
  let lbs = e.target.value;
  gramsOutput.innerHTML = lbs / 0.0022046;
  kgOutput.innerHTML = lbs / 2.2046;
  ozOutput.innerHTML = lbs * 16;
}

input.addEventListener("input", convertWeight);
