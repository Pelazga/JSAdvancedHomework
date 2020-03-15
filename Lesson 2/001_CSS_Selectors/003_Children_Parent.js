// p {
//     color: brown;
// }
// div p a span {
//     color: red;
// }
// div > span {
//     color: green;
// }

let paragraphs = document.querySelectorAll('p');
let spanInAInPInDiv = document.querySelectorAll('div p span');
let spanInDiv = document.querySelectorAll('div > span');

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = 'brown';
}

for (let i = 0; i < spanInAInPInDiv.length; i++) {
    spanInAInPInDiv[i].style.color = 'red';
}

for (let i = 0; i < spanInAInPInDiv.length; i++) {
    spanInDiv[i].style.color = 'green';
}