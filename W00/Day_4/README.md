# Objects
An object is a data structure containing related information (properties) and actions (methods) all grouped under one name.

To create objects, we use curly brackets `{}`, and inside them, we define entries. Each entry consists of a key/value pair separated by a colon `:`

- *Key* : A key is a unique identifier within an object. It serves as the reference point for accessing the associated value. Keys are strings or symbols, and they must be unique within the same object. (The key could be a string, number, boolean, null or undefined
- *Value* : The data associated with a specific key. It can be of any data type.
### Syntax
```javascript
let student = { 
    name: "Alice", 
    age: 15,
    hobbies: ["Reading", "Chess", "Coding"],
    teacher: {
        fullname: 'John Doe',
        age: 49,
    },   
    study: function() { // anonymous function
        console.log("Studying hard!"); 
    },
};
```
## Classes
Now imagine you have to store and manage information about different types of vehicles in a computer program. Each vehicle has distinct characteristics, such as its make, model, year, and color. In JavaScript, you can use objects to represent individual vehicles, where each property of the object corresponds to a specific attribute of the vehicle.

For example:

```javascript
let car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  color: 'Blue'
};
```

Here, `car` is an object that encapsulates the details of a specific vehicle. **However, if you want to create multiple vehicles with the same structure, it becomes tedious to manually create separate objects for each one**. This is where classes come into play.

A class in JavaScript is like a blueprint for creating objects with a similar structure. You can think of a class as a template that defines the properties and behaviors that its instances (objects) will have. Using the vehicle analogy, let's create a `Vehicle` class:

```javascript
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }
}
```

Now, you can create new instances of the `Vehicle` class to represent different vehicles:

```javascript
let car1 = new Vehicle('Toyota', 'Camry', 2020, 'Blue');
let car2 = new Vehicle('Honda', 'Accord', 2021, 'Silver');
```

## Methods
Methods are functions that are defined within the class and are associated with the objects created from that class. **These methods encapsulate behaviors or actions that the objects can perform**. Let's extend the previous example of the `Vehicle` class to include methods:

```javascript
class Vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  displayInfo() {
    console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
  } // responsible for logging information about the vehicle to the console

  honk() {
    console.log('Honk! Honk!');
  } // simulates the vehicle's honking action.
}
```

Now, when you create instances of the `Vehicle` class, you can call these methods on those instances:

```javascript
let car1 = new Vehicle('Toyota', 'Camry', 2020, 'Blue');
let car2 = new Vehicle('Honda', 'Accord', 2021, 'Silver');

car1.displayInfo(); // Output: Make: Toyota, Model: Camry, Year: 2020, Color: Blue
car2.honk(); // Output: Honk! Honk!
```