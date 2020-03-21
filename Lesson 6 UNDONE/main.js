window.onload = function () {
    var ballDiv = document.querySelector('#ball');
    var startRolling;
    var position = 0;
    var batton = document.querySelector('button');
    var screenWidth = screen.width - 200;

    batton.addEventListener('click', stopRolling)
    ballDiv.addEventListener('click', startMovement);

    function startMovement() {
        // debugger;
        startRolling = setInterval(() => {
            if (position == screenWidth) {
                position = 0;
            } else {
                ++position
                ballDiv.style = `left: ${position}px`
            }
        }, 5);
    }

    function stopRolling() {
        clearInterval(startRolling);
    }
}