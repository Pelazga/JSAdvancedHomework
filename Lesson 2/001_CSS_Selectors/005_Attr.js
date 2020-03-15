// a[target] {
//     background-color: yellow;
// }
// a[target='_blank'] { 
//     background-color: red;
// }

let aTarget = document.querySelectorAll('a[target]');
let aTargetBlank = document.querySelectorAll('a[target="_blank"]');

for (let i = 0; i < aTarget.length; i++) {
    aTarget[i].style.background = 'yellow';
}

for (let i = 0; i < aTarget.length; i++) {
    aTargetBlank[i].style.background = 'red';
}