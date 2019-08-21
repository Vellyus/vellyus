let binary = [];
let html = "";

var a = prompt('Type in a number!');

do {
    if (a % 2 == 1) {
        binary.unshift(1);
        a -= 1;
        a /= 2;
    } else {
        binary.unshift(0);
        a /= 2;
    }
} while (a > 0)

for (let digits of binary) {
    html += digits;
}

document.querySelector('#output').innerHTML = html;