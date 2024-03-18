const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const rgbToHex = (r, g, b) =>
  "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");

const generateColor = () => {
  const r = randomInt(0, 255);
  const g = randomInt(0, 255);
  const b = randomInt(0, 255);
  return rgbToHex(r, g, b);
};

document.querySelector("button").addEventListener(
  "click",
  () => {
      setTimeout(() => {
        document.querySelector(".copied").classList.remove("active");
      }, 1250);
    const HEX = generateColor();
    document.querySelector("h1").style.backgroundColor = HEX;
    document.getElementById("copy").innerHTML = HEX;
    document.querySelector(".copied").classList.add("active");
},
false
);