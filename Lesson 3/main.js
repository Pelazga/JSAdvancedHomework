let count = 1;
let startTimer = setInterval(function(){
    document.getElementById('display').innerHTML = count;
    count++
}, 1000);

function stopTimer() {
    clearInterval(startTimer);
}

startTimer();