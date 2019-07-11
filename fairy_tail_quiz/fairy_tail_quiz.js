/*
Tasks

1. ask at least 5 questions -> DONE
2. keep track of the number of questions the user answered correctly -> DONE
3. provide a final message after the quiz, letting the use know the number of questions he/she got right -> DONE
4. rank the player 5 - gold crown / 4-3 - silver crown / 2-1 - bronze crown / 0 - nothing

*/

/*
Quesitons
Fairy Tail Quiz

1. What is Gray's last name?
2. On which of his body part does Bickslow has his guild mark?
3. How is Levi's, Jet's and Droy's team called?
4. What piece of clothing did Igneel give to Natsu?
5. In which year did the dragons disappear? (Igneel, Metalicana, Grandine)
*/


// Keeps track of the number of questions left
var questions = 5;
var questionsLeft = " [ " + questions + " questions left. ]";

prompt("Hi! This is a Fairy Tail Quiz. You will have 5 questions to answer and you will get 1 pont for each one you get right. Lets see how many points you can get! Press \"OK\" to get started! Good Luck!");

// The Five questions
var question1 = prompt("1. What is Gray's last name?" + questionsLeft);
questions -= 1;
questionsLeft = " [ " + questions + " questions left. ]";
var question2 = prompt("2. On which of his body part does Bickslow has his guild mark?" + questionsLeft);
questions -= 1;
questionsLeft = " [ " + questions + " questions left. ]";

var question3 = prompt("3. How is Levi's, Jet's and Droy's team called?" + questionsLeft);
questions -= 1;
questionsLeft = " [ " + questions + " questions left. ]";

var question4 = prompt("4. What piece of clothing did Igneel give to Natsu?" + questionsLeft);
questions -= 1;
questionsLeft = " [ " + questions + " question left. ]";

var question5 = prompt("5. In which year did the dragons disappear? (Igneel, Metalicana, Grandine)" + questionsLeft);

// Score and right answers - if the answer is right +1 score, if not nothing happens
var score = 0;

if (question1.toUpperCase() === "FULLBUSTER") {
  score += 1;
} else {
  score += 0;
}

if (question2.toUpperCase() === "TOUNGE" || question2.toUpperCase() === "HIS TOUNGE" || question2.toUpperCase() === "ON HIS TOUNGE") {
  score += 1;
} else {
  score += 0;
}

if (question3.toUpperCase() === "SHADOW GEAR" || question3.toUpperCase() === "SHADOWGEAR") {
  score += 1;
} else {
  score += 0;
}

if (question4.toUpperCase() === "SCARF" || question4.toUpperCase() === "A SCARF") {
  score += 1;
} else {
  score += 0;
}

if (question5.toUpperCase() === "777") {
  score += 1;
} else {
  score += 0;
}

// Final message - Ranking the player
document.write("Score = " + score);

if (score === 5) {
  document.write("<p>You answered all 5 questions correctly. You earned a gold crown!</p>")
} else if (score === 4) {
  document.write("<p>You answered 4 questions correctly. You earned a silver crown!</p>")
} else if (score === 3) {
  document.write("<p>You answered 3 questions correctly. You earned a silver crown!</p>")
} else if (score === 2) {
  document.write("<p>You answered 2 questions correctly. You earned a bronze crown!</p>")
} else if (score === 1) {
  document.write("<p>You answered 1 question correctly. You earned a bronze crown!</p>")
} else {
  document.write("<p>You answered 0 questions correctly. No crown for you!</p>")
}
