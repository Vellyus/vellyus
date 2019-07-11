var bottomNumber = parseInt(prompt("Enter a number!"));
var topNumber = parseInt(prompt("Enter another number"));
var randomNumber = Math.floor(Math.random()*(topNumber-bottomNumber +1))+bottomNumber;
console.log(randomNumber);

var message = "<p>"+ randomNumber + " is a number between " + bottomNumber + " and " + topNumber +"<p/>";
document.write(message);