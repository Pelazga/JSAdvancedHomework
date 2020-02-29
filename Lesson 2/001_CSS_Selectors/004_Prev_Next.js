let div = document.querySelectorAll('div');
let nextp = div[0].nextElementSibling;
nextp.style.background = 'yellow'
let pUl = document.querySelectorAll('p ~ ul');
for (let i = 0; i < pUl.length; i++) {
    pUl[i].style.background = '#ff0000';
}