window.onload = function () {
    // Math.floor(Math.random() * (225 - 0) + 0);
    let divs = document.querySelectorAll('div');

    function createNewColor() {
        let r = Math.floor(Math.random() * (225 - 0) + 0);
        let g = Math.floor(Math.random() * (225 - 0) + 0);
        let b = Math.floor(Math.random() * (225 - 0) + 0);
        let newcolor = 'rgb('+ r + ','+ g + ',' + b + ')';
        
        return newcolor;
    }

    function checkColor(color) {
        for (let i = 0; i < divs.length; i++) {
            if (getComputedStyle(divs[i]).backgroundColor == color) {
                return true;
            }        
        }
        return false
    }

    function paintDiv() {
        // debugger;
        let newColor;
        
        do {
            newColor = createNewColor();
            var checkResult = checkColor(newColor);
        } while (checkResult === true);
        
        this.style.backgroundColor = newColor;
        this.innerHTML = '<p class="colour">' + newColor + '</p>';
    }



    for (let i = 0; i < divs.length; i++) {
        divs[i].onmouseover = paintDiv;
        
    }

    window.onbeforeunload = function() { // событие на закрытие вкладки
        return "Данные не сохранены. Точно перейти? Не смейте!";
    };
}