function dieRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function print(message) {
  document.write(message);
}

function displayPicture(dieRollNr) {
  if (dieRollNr === 1) {
    print('<img src="../img/die1.jpg">')
  } else if (dieRollNr === 2) {
    print('<img src="../img/die2.jpg">')
  } else if (dieRollNr === 3) {
    print('<img src="../img/die3.jpg">')
  } else if (dieRollNr === 4) {
    print('<img src="../img/die4.jpg">')
  } else if (dieRollNr === 5) {
    print('<img src="../img/die5.jpg">')
  } else {
    print('<img src="../img/die6.jpg">')
  }

}

function convertValue(dieRollNr) {
  var dieValue = 0;
  if (dieRollNr === 3) {
    dieValue += 2;
  } else if (dieRollNr === 5) {
    dieValue += 4;
  }
  return dieValue;
}

var dieRoll1 = dieRoll();
var dieRoll2 = dieRoll();
var dieRoll3 = dieRoll();
var dieRoll4 = dieRoll();
var dieRoll5 = dieRoll();

var value1 = convertValue(dieRoll1);
var value2 = convertValue(dieRoll2);
var value3 = convertValue(dieRoll3);
var value4 = convertValue(dieRoll4);
var value5 = convertValue(dieRoll5);

displayPicture(dieRoll1);
displayPicture(dieRoll2);
displayPicture(dieRoll3);
displayPicture(dieRoll4);
displayPicture(dieRoll5);

var result = value1 + value2 + value3 + value4 + value5;
print("<br>");
print("The result of this roll is " + result);