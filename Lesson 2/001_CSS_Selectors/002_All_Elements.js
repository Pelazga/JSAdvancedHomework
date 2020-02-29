    // Перепишите все селекторы из первой папки 001_CSS_Selectors с помощью известных 
    // Вам методов и свойств.

    // В примере с классом добавьте к существующем классу, класс с именем newclass,
    //  а также выведите в консоль все стили что есть у элемента с этим классом

    // В примере с индентификатором добавьте свойства marginTop с значением 10px и 
    // background с значением red


    let bodyAll = document.querySelectorAll('*');
    for (let i = 0; i < bodyAll.length; i++) {
        bodyAll[i].style.color = 'red';
        bodyAll[i].style.textDecoration = 'none';
    }

    let paragraph = document.querySelectorAll('p');
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.color = 'brown';
    }

    let elClass = document.querySelectorAll('.class');
    for (let i = 0; i < elClass.length; i++) {
        elClass[i].style.color = 'green';
        elClass[i].classList.add('newclass');
        let divNewClass = document.querySelector('.newclass');
        console.log(getComputedStyle(divNewClass));
    }
    let elClass1 = document.querySelectorAll('.class1');
    for (let i = 0; i < elClass1.length; i++) {
        elClass1[i].classList.add('newclass');
        let divNewClass = document.querySelector('.newclass');
        console.log(getComputedStyle(divNewClass));
    }
    let elA = document.querySelectorAll('a');
    for (let i = 0; i < elA.length; i++) {
        elA[i].style.fontWeight = 'bold';
        elA[i].style.fontStyle = 'italic';
        elA[i].style.textDecoration = 'underline';
    }
    let allPAndA = document.querySelectorAll('p, a');
    for (let i = 0; i < allPAndA.length; i++) {
        allPAndA[i].style.textTransform = 'uppercase';
    }