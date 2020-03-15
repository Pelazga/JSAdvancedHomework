window.onload = function () {
    //   var mainDiv = document.getElementById("main-div");
    //   mainDiv.onmouseover = function(e) {
    //     var target = e && e.target || window.event.srcElement;
    //     var dataToggleId = target.getAttribute('data-tooltip');
    //     if (!dataToggleId) {
    //         return
    //     };
    //   //   После afterStart вставить див с классом tooltip и вписать в него значение из data-tooltip
    // };

    var spans = this.document.querySelectorAll('span');


    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('mouseover', showTooltip);
    }
    for (let i = 0; i < spans.length; i++) {
        spans[i].addEventListener('mouseleave', hideTooltip);
        
    }

    function showTooltip(e) {
        if (e.target.children[0]) {
            e.target.children[0].style = 'display: block'
        } else {   
            var tooltipText = e.target.getAttribute('data-tooltip');
            console.log(tooltipText);
            var newDiv = `<div> ${tooltipText} </div>`
            e.target.insertAdjacentHTML('afterbegin', newDiv);
            newDiv.style = 'display: block'
        }
    }
    
    function hideTooltip(e) {
        e.target.children[0].style = 'display: none'
    }
};