    // Перепишите все селекторы из первой папки 001_CSS_Selectors с помощью известных 
    // Вам методов и свойств.

    // В примере с классом добавьте к существующем классу, класс с именем newclass,
    //  а также выведите в консоль все стили что есть у элемента с этим классом

    // В примере с индентификатором добавьте свойства marginTop с значением 10px и 
    // background с значением red
    
    
    let bodyAll = document.querySelectorAll('*');
    let paragraph = document.querySelectorAll('p');
    let elClass = document.querySelectorAll('.class');
    let elClass1 = document.querySelectorAll('.class1');
    let elA = document.querySelectorAll('a');
    let allPAndA = document.querySelectorAll('p, a');
    
    for (let i = 0; i < bodyAll.length; i++) {
        bodyAll[i].style.color = 'red';
        bodyAll[i].style.textDecoration = 'none';
    }
    
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.color = 'brown';
    }
    
    for (let i = 0; i < elClass.length; i++) {
        elClass[i].style.color = 'green';
        elClass[i].classList.add('newclass');
        
        let divNewClass = document.querySelector('.newclass');
        
        console.log(getComputedStyle(divNewClass));
    }
    
    for (let i = 0; i < elClass1.length; i++) {
        elClass1[i].classList.add('newclass');
        let divNewClass = document.querySelector('.newclass');
        console.log(getComputedStyle(divNewClass));
    }
    
    for (let i = 0; i < elA.length; i++) {
        elA[i].style.fontWeight = 'bold';
        elA[i].style.fontStyle = 'italic';
        elA[i].style.textDecoration = 'underline';
    }
    
    for (let i = 0; i < allPAndA.length; i++) {
        allPAndA[i].style.textTransform = 'uppercase';
    }