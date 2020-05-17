class Color {
  constructor(red=getRandomRGB(), green=getRandomRGB(), blue=getRandomRGB()) {
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  get hexRed() {
    return toHex(this.red);
  }

  get hexGreen() {
    return toHex(this.green);
  }

  get hexBlue() {
    return toHex(this.blue);
  }

  get backgroundColor() {
    return `#${color.hexRed}${color.hexGreen}${color.hexBlue}`;
  }

}

function getRandomRGB() {
  return Math.floor(Math.random() * 256);
}

function toHex(d) {
  return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

const _red = "red";
const _green = "green";
const _blue = "blue";

const color = new Color;

function setBackgroundColor(backgroundColor) {
  document.querySelector("h1").innerText = backgroundColor;
  document.querySelector("body").style.backgroundColor = backgroundColor;
}

function iterateColor(blue, green, red) {

  color[blue]++;

  if (color[blue] === 256) {
    color[green]++;
    color[blue] = 0;
  }

  if (color[green] === 256) {
    color[red]++;
    color[green] = 0;
  }

  if (color[red] === 256) {
    color[red] = 0;
    color[green] = 0;
    color[blue] = 0;
  }

  setBackgroundColor(color.backgroundColor);
}

setInterval(iterateColor, 1000, _blue, _green, _red);
