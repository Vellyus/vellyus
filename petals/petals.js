/*
Felépítés

Dobókocka - Math.floor(Math.random() *6) +1 -> DONE
A dobókocka értékéhez megfelelő képeket rendelünk -> DONE
A dobókockából kinyert értéket konvertáljuk a játéknak megfelelően és tároljuk -> 1,2,4,6 = 0 / 3 = 2 / 5 = 4  -> DONE
Összeadjuk a konvertált értékeket és közöljuk a játékossal a dobás eredményét

*/

//Creates a die roll
var dieRoll1 = Math.floor(Math.random() * 6) + 1;
var dieRoll2 = Math.floor(Math.random() * 6) + 1;
var dieRoll3 = Math.floor(Math.random() * 6) + 1;
var dieRoll4 = Math.floor(Math.random() * 6) + 1;
var dieRoll5 = Math.floor(Math.random() * 6) + 1;


//Displays a picture for the dieRoll1
if (dieRoll1 === 1) {
  document.write('<img src="../img/die1.jpg">');
} else if (dieRoll1 === 2) {
  document.write('<img src="../img/die2.jpg">');
} else if (dieRoll1 === 3) {
  document.write('<img src="../img/die3.jpg">');
} else if (dieRoll1 === 4) {
  document.write('<img src="../img/die4.jpg">');
} else if (dieRoll1 === 5) {
  document.write('<img src="../img/die5.jpg">');
} else {
  document.write('<img src="../img/die6.jpg">');
}

//Displays a picture for the dieRoll2
if (dieRoll2 === 1) {
  document.write('<img src="../img/die1.jpg">');
} else if (dieRoll2 === 2) {
  document.write('<img src="../img/die2.jpg">');
} else if (dieRoll2 === 3) {
  document.write('<img src="../img/die3.jpg">');
} else if (dieRoll2 === 4) {
  document.write('<img src="../img/die4.jpg">');
} else if (dieRoll2 === 5) {
  document.write('<img src="../img/die5.jpg">');
} else {
  document.write('<img src="../img/die6.jpg">');
}

//Displays a picture for the dieRoll3
if (dieRoll3 === 1) {
  document.write('<img src="../img/die1.jpg">');
} else if (dieRoll3 === 2) {
  document.write('<img src="../img/die2.jpg">');
} else if (dieRoll3 === 3) {
  document.write('<img src="../img/die3.jpg">');
} else if (dieRoll3 === 4) {
  document.write('<img src="../img/die4.jpg">');
} else if (dieRoll3 === 5) {
  document.write('<img src="../img/die5.jpg">');
} else {
  document.write('<img src="../img/die6.jpg">');
}

//Displays a picture for the dieRoll4
if (dieRoll4 === 1) {
  document.write('<img src="../img/die1.jpg">');
} else if (dieRoll4 === 2) {
  document.write('<img src="../img/die2.jpg">');
} else if (dieRoll4 === 3) {
  document.write('<img src="../img/die3.jpg">');
} else if (dieRoll4 === 4) {
  document.write('<img src="../img/die4.jpg">');
} else if (dieRoll4 === 5) {
  document.write('<img src="../img/die5.jpg">');
} else {
  document.write('<img src="../img/die6.jpg">');
}

//Displays a picture for the dieRoll5
if (dieRoll5 === 1) {
  document.write('<img src="../img/die1.jpg">');
} else if (dieRoll5 === 2) {
  document.write('<img src="../img/die2.jpg">');
} else if (dieRoll5 === 3) {
  document.write('<img src="../img/die3.jpg">');
} else if (dieRoll5 === 4) {
  document.write('<img src="../img/die4.jpg">');
} else if (dieRoll5 === 5) {
  document.write('<img src="../img/die5.jpg">');
} else {
  document.write('<img src="../img/die6.jpg">');
}


// konvertálja a dieRoll-ok értékeit a játéknak megfelelően
var petals1 = 0;
var petals2 = 0;
var petals3 = 0;
var petals4 = 0;
var petals5 = 0;

if (dieRoll1 === 3) {
  petals1 += 2;
} else if (dieRoll1 === 5) {
  petals1 += 4;
}

if (dieRoll2 === 3) {
  petals2 += 2;
} else if (dieRoll2 === 5) {
  petals2 += 4;
}

if (dieRoll3 === 3) {
  petals3 += 2;
} else if (dieRoll3 === 5) {
  petals3 += 4;
}

if (dieRoll4 === 3) {
  petals4 += 2;
} else if (dieRoll4 === 5) {
  petals4 += 4;
}

if (dieRoll5 === 3) {
  petals5 += 2;
} else if (dieRoll5 === 5) {
  petals5 += 4;
}


var result = petals1 + petals2 + petals3 + petals4 + petals5;
document.write("<br>");
document.write("The result of this roll is " + result);