let div = document.querySelectorAll('div');
let nextp = div[0].nextElementSibling;
let pUl = document.querySelectorAll('p ~ ul');

nextp.style.background = 'yellow'

for (let i = 0; i < pUl.length; i++) {
    pUl[i].style.background = '#ff0000';
}