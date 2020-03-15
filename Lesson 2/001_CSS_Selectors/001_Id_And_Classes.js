    // Перепишите все селекторы из первой папки 001_CSS_Selectors с помощью известных 
    // Вам методов и свойств.

    // В примере с классом добавьте к существующем классу, класс с именем newclass,
    //  а также выведите в консоль все стили что есть у элемента с этим классом

    // В примере с индентификатором добавьте свойства marginTop с значением 10px и 
    // background с значением red

//     <style>
//     #id1 {
//         color: red;
//     }
//     div.class1 {
//         color: blue;
//         font-size: 14px;
//         text-decoration: underline;
//     }        
// </style>

let divId1 = document.querySelector('#id1');
let divClass1 = document.querySelector('div.class1');
let divNewClass = document.querySelector('.newclass');

divId1.style.color = 'red';
divId1.style.marginTop = '10px';
divId1.style.background = 'red';

divClass1.style.color = 'blue';
divClass1.style.fontSize = '14px';
divClass1.style.textDecoration = 'underline';
divClass1.classList.add('newclass');

console.log(getComputedStyle(divNewClass));
