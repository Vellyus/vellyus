var fistName = prompt("What is your first name?");
fistName = fistName.toUpperCase();

var lastName = prompt("What is your last name?");
lastName = lastName.toUpperCase();

var nameLenght = ((fistName + " " + lastName).length);

alert ("The string " + "\"" + fistName + " " + lastName + "\"" + " is " + nameLenght + " characters long.");


// alert message: The string "GÁBOR SZALAI" is 12 characters long.
