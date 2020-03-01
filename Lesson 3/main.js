let count = 1;
var startTimer;

function myFunc() {
    startTimer= setInterval(function(){
        document.getElementById('display').innerHTML = count;
        count++
    }, 1000);
}

function stopTimer() {
    clearInterval(startTimer);
}

function reset() {
    count = 1;
    document.getElementById('display').innerHTML = count;
}

function continueTimer() {
    setInterval(function(){
        document.getElementById('display').innerHTML = count;
        count++
    }, 1000);
}
myFunc();