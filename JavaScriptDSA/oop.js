// Create a Basic JavaScript Object
let dogs = {
    name: "Rishabh",
    numLegs: 2
};

// Use Dot Notation to Access the Properties of an Object
let dog1 = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog1.name)
console.log(dog1.numLegs)

// Create a Method on an Object
let dog2 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + dog2.numLegs + " legs."; }

};

dog.sayLegs();

// Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () { return "This dog has " + this.numLegs + " legs."; }
};

dog.sayLegs();

// Define a Constructor Function
function Dogs() {
    this.name = "Rishabh",
        this.color = "Black",
        this.numLegs = 2
}

// Use a Constructor to Create Objects
function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

// Extend Constructors to Receive Arguments
function Dog1(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let terrier = new Dog1('Rishabh', 'purple')

// Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(4)
myHouse instanceof House;

// Understand Own Properties
function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps1 = [];
// Only change code below this line
for (let property in canary) {
    if (canary.hasOwnProperty(property)) {
        ownProps1.push(property);
    }
}

console.log(ownProps)

// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagles = new Dog("Snoopy");
console.log(beagles);

// Iterate Over All Properties
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    }
    else {
        prototypeProps.push(property)
    }
}

console.log(ownProps);
console.log(prototypeProps);


// Understand the Constructor Property
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if (candidate.constructor === Dog) {
        return true;
    } else {
        return false;
    }
}

// Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Only change code below this line
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom")
    },
    describe: function () {
        console.log("My name is " + this.name)
    }
};

// Remember to Set the Constructor Property when Changing the Prototype
function Dog(name) {
    this.name = name;
}

// Only change code below this line
Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function () {
        console.log("nom nom nom");
    },
    describe: function () {
        console.log("My name is " + this.name);
    }
};

// Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
}

let beagle2 = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle2)

// Understand the Prototype Chain
function Dog(name) {
    this.name = name;
}

let beagle3 = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle3);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

// Use Inheritance So You Don't Repeat Yourself
function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Cat
};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Bear
};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

let duck = Object.create(Animal.prototype); // Change this line
let beagle4 = Object.create(Animal.prototype); // Change this line

// Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);
let beagle5 = new Dog();
beagle.eat();

// Reset an Inherited Constructor Property
function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;


let duck2 = new Bird();
duck.constructor

let beagle6 = new Dog();
beagle.constructor

// Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
    console.log("Woof!")
}


// Only change code above this line

let beagle8 = new Dog();

// function Bird() { }

Bird.prototype.fly = function () { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird."
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());

// Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log('Glide, Wooosh!')
    }
}
glideMixin(bird)
glideMixin(boat)

// Use Closure to Protect Properties Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
    this.getWeight = function () {
        return weight;
    }
}

// Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
})
    ();

// // let isCuteMixin = function (obj) {
//   obj.isCute = function () {
//     return true;
//   };
// };
// let singMixin = function (obj) {
//   obj.sing = function () {
//     console.log("Singing to an awesome tune");
//   };
// };

let funModule = (function () {
    return {
        isCuteMixin: function (obj) {
            obj.isCute = function () {
                return true;
            };
        },
        singMixin: function (obj) {
            obj.sing = function () {
                console.log("Singing to an awesome tune");
            };
        }
    }
})();