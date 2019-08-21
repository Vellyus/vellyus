var number = prompt('Type in a binary number!');
var digits = [];
var output = 0;

numberConvertedToString = number.toString();

for (var i = 0; i < numberConvertedToString.length; i++) {
    digits.unshift(+numberConvertedToString.charAt(i));
}

for (let i = 0; i < digits.length; i++) {
    output += digits[i] * 2 ** i;
}

document.querySelector('#output').innerHTML = output;