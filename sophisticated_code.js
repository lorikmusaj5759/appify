/*******************************************************
 * Filename:  sophisticated_code.js
 * Content:   Complex JavaScript code showcasing various concepts and functionalities
 ********************************************************/

// This sophisticated code demonstrates a simulation of a virtual city with different objects, events, and interactions.

// Define class for a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = 'City Center';
    this.job = null;
  }

  move(location) {
    this.location = location;
    console.log(`${this.name} moved to ${this.location}`);
  }

  applyForJob(job) {
    this.job = job;
    console.log(`${this.name} applied for the ${this.job}`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(`Happy Birthday ${this.name}! You are now ${this.age} years old.`);
  }
}

// Create a person instance
const john = new Person('John', 25);
john.move('Residential Area');
john.applyForJob('Engineer');
john.celebrateBirthday();

// Define class for a building
class Building {
  constructor(name, type, capacity) {
    this.name = name;
    this.type = type;
    this.capacity = capacity;
    this.occupants = [];
  }

  addOccupant(occupant) {
    if (this.occupants.length < this.capacity) {
      this.occupants.push(occupant);
      console.log(`${occupant.name} moved into ${this.name}`);
    } else {
      console.log(`Sorry, ${this.name} is full.`);
    }
  }
}

// Create building instances
const officeBuilding = new Building('Tech Tower', 'Office', 100);
const apartmentBuilding = new Building('Residence Paradise', 'Apartment', 200);

// The city simulation

// Move John into an apartment
apartmentBuilding.addOccupant(john);

// Create more people
const mary = new Person('Mary', 28);
const david = new Person('David', 35);
const lisa = new Person('Lisa', 22);

// Move Mary, David, and Lisa into the apartment
apartmentBuilding.addOccupant(mary);
apartmentBuilding.addOccupant(david);
apartmentBuilding.addOccupant(lisa);

// Attempt to add more occupants to the full apartment
const kate = new Person('Kate', 30);
apartmentBuilding.addOccupant(kate);

// Move John to the office building
officeBuilding.addOccupant(john);

// Simulate time passing
john.celebrateBirthday();
mary.move('City Park');

// Display information about the city objects
console.log(john);
console.log(mary);
console.log(david);
console.log(lisa);
console.log(officeBuilding);
console.log(apartmentBuilding);