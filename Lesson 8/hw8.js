// ==============================================================================
// Для куки
// ==============================================================================
// window.addEventListener('load', function () {
//     document.querySelector('button').addEventListener('click', setUserName);
//     var greatingDiv = document.querySelector('#greating');
    

//     function setUserName() {
//         document.cookie = encodeURIComponent(prompt('Enter user name', 'Admin'));
//         greatingDiv.innerHTML = `Пользователь <span>${getUsername()}</span> вошел в систему.`
//     }
    
//     function getUsername() {
//         return decodeURIComponent(document.cookie);
//     }

//     setUserName();

// })

// ==============================================================================
// Для локал сторедж
// ==============================================================================

window.addEventListener('load', function () {
    document.querySelector('button').addEventListener('click', setUserName);
    var greatingDiv = document.querySelector('#greating');
    

    function setUserName() {
        window.sessionStorage.setItem('UserName', prompt('Enter user name', 'Admin'));
        greatingDiv.innerHTML = `Пользователь <span>${getUsername()}</span> вошел в систему.`
    }
    
    function getUsername() {
        return window.sessionStorage.getItem("UserName");
    }

    setUserName();

})