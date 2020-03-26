window.addEventListener('load', function () {
    var loader = document.querySelector('.cover');
    var swapiUrl = 'https://swapi.co/api/people/1';
    var charUrl = 'https://swapi.co/api/people/';
    var charListDiv = document.querySelector('.carList');
    var nextButton = document.querySelector('.next');

    // nextButton.addEventListener('click', getNewChar);

    var getJson = function(url, fooToCreateEl, charDiv) {
        loader.classList.toggle('hidden');
        fetch(url)
            .then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                        return
                    }
                    response.json()
                            .then(function (data) {
                                fooToCreateEl(data, charDiv);
                                console.log(data);
                                loader.classList.toggle('hidden');
                            });
                }
            )
            .catch(function (err) {
                console.log('Fetch Error :-S', err);  
            })
    }

    function createTenChar (){
        for (let i = 1; i < 11; i++) {
            let newUrl = charUrl + i
            let charData = getJson(newUrl , createTableForChar);
            console.log(charData);
            
        }
    }

    createTenChar();
    


    function createTableForChar(data) {
        var charDiv = document.createElement('div');
        charDiv.classList.add('carecter');
        charDiv.innerHTML = charTempl;
        charDiv.querySelector('.name').innerHTML = data.name
        charDiv.querySelector('.birthday').innerHTML = data.birth_year
        charDiv.querySelector('.gender').innerHTML = data.gender
        let filmArr = data.films;
        createFilmList(filmArr, charDiv);
        let planetUrl = data.homeworld;
        addPlanetOrSpecies(planetUrl, charDiv, 'homeworld');
        let speciesUrl = data.species;
        addPlanetOrSpecies(speciesUrl, charDiv, 'species')
        charListDiv.appendChild(charDiv);
        
    }
    function createFilmList(arr, charDiv) {
        for (let i = 0; i < arr.length; i++) {
            let filmUrl = arr[i];
            let film = getJson(filmUrl, createLiEl, charDiv);
            
        }
    }

    function createLiEl (data, charDiv) {
        let newli = document.createElement('li');
        newli.innerHTML = data.title;
        let filmList = charDiv.querySelector('.filmList');
        filmList.appendChild(newli);
        console.log(filmList);
    }

    function addPlanetOrSpecies(url, charDiv, className) {
        getJson(url, function(data) {
            charDiv.querySelector(`.${className}`).innerHTML = data.name
        })
    }


    var charTempl = `<div>
                        <div>
                            Name
                        </div>
                        <div class="name">
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            Birthday
                        </div>
                        <div class="birthday">
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            Gender
                        </div>
                        <div class="gender">
                            
                        </div>
                    </div>
                    <div>
                        <div>
                            Film list
                        </div>
                        <div class="films">
                            <ul class="filmList">
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            Home planet
                        </div>
                        <div class="homeworld">
                        </div>
                    </div>
                    <div>
                        <div>
                            Species
                        </div>
                        <div class="species">
                        </div>
                    </div>`
             
})