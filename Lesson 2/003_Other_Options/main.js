let firstDiv = document.getElementById('one');
let divTwo = firstDiv.cloneNode(true);
let divThree;

function addNewDiv() {
    divThree = this.cloneNode(true);
    divThree.id = 'two_first';
    this.id = 'two_second';
    
    this.insertAdjacentElement('beforeBegin', divThree);

}

divTwo.id = 'two';
divTwo.innerHTML = 'two';
divTwo.onclick = addNewDiv;
firstDiv.insertAdjacentElement('afterEnd', divTwo);




// function divide(div) {
// 	console.log(div);
// 	let newNumder =+ this.innerText;

// 	var newNumb = parseInt(div.innerText);
// 	div.innerText = ++newNumb;

// 	var width = getComputedStyle(div).width;
// 	width = width.split('px');
// 	width = width[0]/2;
// 	div.style.width = width+'px';

// 	var divDiv = div.cloneNode(true);
// 	div.insertAdjacentElement('afterEnd', divDiv);


// }

// Добавьте после дива с id=one еще один див с текстом two и id=two
// На клик по id=two добавьте перед ним див с id - two_first, 
//а див с id=two измените на two_second 