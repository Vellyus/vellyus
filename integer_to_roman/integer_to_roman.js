const numerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
let input = parseInt(prompt("Type in a number!"));
let i = 0;

do {
    for (i; input - numerals[i] < 0; i++) {
        console.log(i);
    }
    input -= numerals[i];
    document.querySelector('.output').innerText += romanNumerals[i];
} while (input > 0)
