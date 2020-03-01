// let count = 1;
let count = 30;
var startTimer;

function startMyTimer() {
    stopTimer();
    startTimer= setInterval(function(){
        // if (count < 31) {
        if (count > 0) {
            document.getElementById('display').innerHTML = count;
            // count++
            count--
        } else {
            stopTimer(startTimer);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(startTimer);
}

function reset() {
    // count = 1;
    count = 30;
    document.getElementById('display').innerHTML = count;
}

startMyTimer();