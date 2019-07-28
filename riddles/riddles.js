var questions = [
    ["Jani anyukájának négy gyereke van. Az első Április, a második Május, a harmadik Június. Hogy hívják a negyediket?", "jani"],
    ["Reggel mindig elvesztem a fejem és csak este kapom vissza. Mi vagyok én? ", "párna"],
    ["Aki készíti, annak nem kell. Aki megveszi, az nem használja. Aki használja, az nem tud róla. Mi az?", "koporsó"]
];

var userAnswers = [
    ['', true],
    ['', true],
    ['', true]
];

var rightAnswers = 3;
var questionsAnsweredCorrectly = "";
var questionsAnsweredWrongly = "";

function print(message) {
    document.write(message);
}

function askQuestionsAndTestAnswers(list) {
    for (var i = 0; i < list.length; i += 1) {
        userAnswers[i][0] = prompt(list[i][0]).toLowerCase();

        if (userAnswers[i][0] !== list[i][1]) {
            userAnswers[i][1] = false;
            rightAnswers -= 1;
        }

    }

}

function printGoodAnswers(list) {
    print("Ezeket a kérdéseket válaszoltad meg helyesen:<br>");
    questionsAnsweredCorrectly += "<ol>";
    for (var i = 0; i < list.length; i += 1) {
        if (list[i][1] === true) {
            questionsAnsweredCorrectly += "<li>" + questions[i][0] + "</li>";
        }
    }
    questionsAnsweredCorrectly += "</ol><br>";
    print(questionsAnsweredCorrectly);
}

function printBadAnswers(list) {
    print("Ezeket a kérdéseket válaszoltad meg hibásan:<br>");
    questionsAnsweredWrongly += "<ol>";
    for (var i = 0; i < list.length; i += 1) {
        if (list[i][1] === false) {
            questionsAnsweredWrongly += "<li>" + questions[i][0] + "</li>";
        }
    }
    questionsAnsweredWrongly += "</ol><br>";
    print(questionsAnsweredWrongly);
}

askQuestionsAndTestAnswers(questions);
print(rightAnswers + " kérdésre adtál helyes választ.<br><br>");
printGoodAnswers(userAnswers);
printBadAnswers(userAnswers);
console.log(userAnswers);