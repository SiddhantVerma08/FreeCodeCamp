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
    sayLegs: function() {return "This dog has " + dog2.numLegs + " legs.";}
  
  };
  
  dog.sayLegs();

// Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
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
  
  let terrier = new Dog1('Rishabh','purple')

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
  for (let property in canary){
    if(canary.hasOwnProperty(property)) {
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
  let beagles= new Dog("Snoopy");
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
  for (let property in beagle){
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    }
    else{
      prototypeProps.push(property)
    }
  }
  
  console.log(ownProps);
  console.log(prototypeProps);


// Understand the Constructor Property
