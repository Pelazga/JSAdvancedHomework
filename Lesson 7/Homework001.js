window.addEventListener('load', function () {
    var dateInput = document. getElementById('userDate');
    dateInput.addEventListener('blur', saveNewDateValue);
    var userDate = '';

    function saveNewDateValue(e) {
        var dayOfWeek = new Date(e.target.value).getDay();
        var outputDiv = document.querySelector('#output');
        outputDiv.innerHTML = dayOfWeek;
    }
})