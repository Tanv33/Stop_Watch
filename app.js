// function timer() {
//     console.log("Run>>>")
// }
// setInterval(timer, 1000)

// setTimeout(timer, 4000)

// setInterval(function() 
//     console.log("Pagal,,,")
// }, 2000)




// Practice
// function timer() {
//     console.log("Chalta ja")
// }
// setInterval(timer, 5000)
// setTimeout(timer, 3000)

// setInterval(function() {
//     console.log("Aik din mar jae ga")
// }, 1000)

// Work Start

// function timer() {
//     console.log("Run..Bhai")
// }

// setInterval(timer, 1000)
// setTimeout()




var minHead = document.getElementById("min")
var secHead = document.getElementById("sec")
var msecHead = document.getElementById("msec")


var min = 00;
var sec = 00;
var msec = 00;
var btndis = document.getElementById('disable')
var interval;


function timer() {
    msec++;
    msecHead.innerHTML = msec;
    if (msec == 100) {
        sec++;
        secHead.innerHTML = sec;
        msec = 00
    } else if (sec == 60) {
        min++;
        minHead.innerHTML = min;
        sec = 00;
    }
}

function start() {
    interval = setInterval(timer, 10)
    btndis.disabled = true;
}

function pause() {
    clearInterval(interval)
    btndis.disabled = false

}

function reset() {
    msec = "00";
    sec = "00";
    min = "00";
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    msecHead.innerHTML = msec;
    btndis.disabled = false
    clearInterval(interval)
}