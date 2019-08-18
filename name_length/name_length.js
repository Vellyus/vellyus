var firstName = prompt("What is your first name?");
firstName = firstName.toUpperCase();

var lastName = prompt("What is your last name?");
lastName = lastName.toUpperCase();

var nameLength = ((firstName + " " + lastName).length);

alert("The string " + "\"" + firstName + " " + lastName + "\"" + " is " + nameLength + " characters long.");


// alert message: The string "GÁBOR SZALAI" is 12 characters long.