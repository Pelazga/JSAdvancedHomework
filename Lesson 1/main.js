let selectedChild;

function clearStyle(){
    
    let list = document.getElementById('myList').childNodes;

    for (let index = 0; index < list.length; index++) {
        list[index].removeAttribute("style");
    }
};

function choseFirst() {
    
    clearStyle();
    
    selectedChild = document.getElementById('myList').firstChild;
    selectedChild.setAttribute("style", "color: green");
};

function choseLast() {
    
    clearStyle();
    
    selectedChild = document.getElementById('myList').lastChild;
   
    selectedChild.setAttribute("style", "color: green");
};



function choseNext() {
    
    let list = document.getElementById('myList').childNodes;
    
    clearStyle();
    
    if (selectedChild.nextSibling == null) {
        choseFirst();   
    } else {
        selectedChild = selectedChild.nextSibling;
        selectedChild.setAttribute("style", "color: green");
    }
};

function chosePrevious() {
    
    let list = document.getElementById('myList').childNodes;
    
    clearStyle();
    
    if (selectedChild.previousSibling == null) {
        choseLast();   
    } else {
        selectedChild = selectedChild.previousSibling;
        selectedChild.setAttribute("style", "color: green");
    }
};

function addNew() {
   
    clearStyle();
   
    var newItem =  document.createElement("li");
   
    newItem.innerText = "New element";
   
    document.getElementById('myList').appendChild(newItem);
    choseLast();
};

function deleteLast() {
   
    choseLast();
   
    let list = document.getElementById('myList');
   
    while (list.childNodes.length > 1) {
        list.removeChild(selectedChild); 
    }
}

function addAtStart() {
    
    clearStyle();
    choseFirst();

    var newItem =  document.createElement("li");
    let list = document.getElementById('myList').childNodes;
   
    newItem.innerText = "New element";
   
    document.getElementById('myList').insertBefore(newItem, selectedChild);
    
    choseFirst();
};