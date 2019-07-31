function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}
// ===================================================================================
// ============================ I ADDED THIS =========================================
// ===================================================================================


var gender = prompt("Are you a male or a female? (format: male / female)");
var year = parseInt(prompt("Which year were you born? (format: 1994)"));
var month = parseInt(prompt("Which month were you born? (format: 02 / 2)"));
var day = parseInt(prompt("Which day were you born? (format: 02 / 2)"));

var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;
var currentDate = new Date().getDate();
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
var currentSecond = new Date().getSeconds();

var hour = 12;
var minute = 0;
var second = 0;

var avarageAge;

if (gender === "male") {
    avarageAge = 2280052800 // 2 280 052 800 seconds , 26389 days
} else {
    avarageAge = 2503958400 // 2 503 958 400 seconds , 28981 days
}

if (month === 01) {
    month = 1;
}
if (month === 02) {
    month = 2;
}
if (month === 03) {
    month = 3;
}
if (month === 04) {
    month = 4;
}
if (month === 05) {
    month = 5;
}
if (month === 06) {
    month = 6;
}
if (month === 07) {
    month = 7;
}
if (month === 08) {
    month = 8;
}
if (month === 09) {
    month = 9;
}

if (day === 01) {
    day = 1;
}
if (day === 02) {
    day = 2;
}
if (day === 03) {
    day = 3;
}
if (day === 04) {
    day = 4;
}
if (day === 05) {
    day = 5;
}
if (day === 06) {
    day = 6;
}
if (day === 07) {
    day = 7;
}
if (day === 08) {
    day = 8;
}
if (day === 09) {
    day = 9;
}

var usersLifeTime = (((currentYear * 12 + currentMonth) * 30 + currentDate)) - ((year * 12 + month) * 30 + day);

var remainingLifeTime = avarageAge - ((((((currentYear * 12 + currentMonth) * 30 + currentDate) * 24 + currentHour) * 60 + currentMinute) * 60 + currentSecond) - ((((year * 12 + month) * 30 + day) * 24 + hour) * 60 + minute) * 60 + second);

var remainingDays = Math.floor(remainingLifeTime / 60 / 60 / 24);

document.write("<p>You have lived more than " + usersLifeTime + " days so far. You have " + remainingDays + " days to live according to avarage life time in Hungary. </p> <h2> DON'T WASTE YOUR TIME! </h2>");
// ===================================================================================


var deadline = new Date(Date.parse(new Date()) + remainingLifeTime * 1000);
initializeClock('clockdiv', deadline);


console.log(currentYear);
console.log(currentMonth);
console.log(currentDate);
console.log(currentHour);
console.log(currentMinute);
console.log(currentSecond);