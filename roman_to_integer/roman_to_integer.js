const numerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
const integers = [1, 5, 10, 50, 100, 500, 1000];
const input = prompt('Type in a roman numeral!').split('');
let values = [];
let output = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < numerals.length; j++) {
    if (input[i] === numerals[j]) {
      values.push(integers[j]);
    }
  }
}

for (let i = 0; i < values.length; i++) {
  if (values[i] < values[i + 1]) {
    output -= values[i];
  } else {
    output += values[i];
  }
}

document.querySelector('.output').innerText = output;