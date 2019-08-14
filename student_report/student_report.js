var message = "";
var student;
var search;
var found = [];

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

function getStudentReport(student) {
    var report = "<h2>Student: " + student.name + "</h2>";
    report += "<p>Track: " + student.track + "</p>";
    report += "<p>Points: " + student.points + "</p>";
    report += "<p>Achievements: " + student.achievements + "</p>";
    return report;
}

while (true) {
    found = [];

    search = prompt('Search student records: type a name [Sarah] (type "list" to list them all or "quit" to end)');
    if (search === null || search.toLowerCase() === 'quit') {
        break;
    }
    for (var i = 0; i < students.length; i++) {
        student = students[i];

        if (student.name === search) {
            found.push(i);
        }

        if (search === "list") {
            found.push(i);
        }
        console.log(found.join(', '));
    }

    for (var i = 0; i < found.length; i++) {
        student = students[found[i]];

        message += getStudentReport(student);
    }
    if (found.length === 0) {
        message += 'There is no student named ' + search + '.';

    }
    print(message);

}