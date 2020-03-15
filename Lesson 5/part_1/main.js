window.onload = function (){
    var divToHideAndShow = document.querySelector('.hidden-text');
    var button = document.querySelector('.link-aka-button');
    var removeBtn = document.querySelector('#removeHandlerBtn');

    console.log(button);
    console.log(divToHideAndShow);
    console.log(removeBtn);
    

    button.addEventListener('click', toggleClass, false);
    removeBtn.addEventListener('click', removeHandler, false);
    
    function removeHandler() {
        button.removeEventListener('click', toggleClass);
        console.log('Handler removed!');
        
    }

    function toggleClass() {
        divToHideAndShow.classList.toggle('hidden');
    }
}