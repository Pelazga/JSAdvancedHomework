class Man {
    constructor(speed, kilograms, liters) {
        this.speed = speed
        this.kilograms = kilograms
        this.liters = liters
    }
    walk() {console.log(`This man can walk at speed ${this.speed}`)};
    eat () {console.log(`This man can eat ${this.kilograms} kg`)};
    drink() {console.log(`This man can drink ${this.liters} liters`);};
}

class Solder extends Man  {
    constructor(speed, kilograms, liters, meters) {
        super (speed, kilograms, liters)
        this.meters = meters
    }
    shoot() {console.log(`This man can shoot up to ${this.meters} meters good`);};
}

class Doctor extends Man  {
    constructor(speed, kilograms, liters, amountOfPeople) {
        super (speed, kilograms, liters)
        this.amountOfPeople = amountOfPeople
    }
    cure() {console.log(`This doctor can cure up to ${this.amountOfPeople} people`);};
}

class Dentist extends Doctor {
    constructor(speed, kilograms, liters, amountOfPeople) {
        super (speed, kilograms, liters, amountOfPeople)
    }
    cure() {console.log(`This doctor can cure up to ${this.amountOfPeople} teath`);};
}

class Surgeon extends Doctor {
    constructor(speed, kilograms, liters, amountOfPeople) {
        super (speed, kilograms, liters, amountOfPeople)
    }
    cure() {console.log(`This doctor can perform up to ${this.amountOfPeople} operations`);};
}

var dima = new Solder (4, 2, 2);
var dimaSolder = new Solder (5, 3, 2.5, 50);
var dimaDoctor = new Doctor (3, 2, 1.5, 20);
var dimaDentist = new Dentist (3, 2, 1.5, 5);
var dimaSurgeon = new Surgeon (3, 2, 1.5, 3);