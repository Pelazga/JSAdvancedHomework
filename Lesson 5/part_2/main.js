window.onload = function () {
    var buttons = document.querySelectorAll('.del-btn');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', dellDiv);
    }
    console.log(buttons);
    
    function dellDiv() {
        var parent = this.parentNode
        parent.innerHTML = '';
        // console.log(parent);
    }
}