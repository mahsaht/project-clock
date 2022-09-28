var hourPointer = document.getElementById("hour-pointer");
var minutePointer = document.getElementById("minute-pointer");
var secondPointer = document.getElementById("second-pointer");
var numeric = document.getElementById("numeric");



function currentTime() {
    var date = new Date();

    var hourAnlge = date.getHours() * 30;
    var minuteAnlge = date.getMinutes() * 6;
    var secondAnlge = date.getSeconds() * 6;


    hourPointer.style.transform   = "rotate(" + hourAnlge + "deg)";
    minutePointer.style.transform = "rotate(" + minuteAnlge + "deg)";
    secondPointer.style.transform = "rotate(" + secondAnlge + "deg)";

    numeric.innerHTML = date.getHours().toString().padStart(2,"0") + ":" + date.getMinutes().toString().padStart(2, "0") + ":" + date.getSeconds().toString().padStart(2, "0");
}

setInterval(currentTime, 0);