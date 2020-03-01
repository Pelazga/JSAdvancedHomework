let count = 1;
var startTimer;

function startMyTimer() {
    stopTimer();
    startTimer= setInterval(function(){
        if (count < 31) {
            document.getElementById('display').innerHTML = count;
            count++
        } else {
            stopTimer(startTimer);
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(startTimer);
}

function reset() {
    count = 1;
    document.getElementById('display').innerHTML = count;
}

startMyTimer();