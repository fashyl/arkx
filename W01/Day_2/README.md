# Intro to ES Features
### Arrow Functions:
Arrow functions are a concise way to write anonymous functions in JavaScript. They have a shorter syntax compared to traditional function expressions and automatically bind to the surrounding context (lexical scoping).

```javascript
// Traditional function expression
let add = function (a, b) {
    return a + b;
};

// Arrow function
let add = (a, b) => a + b;
```

### Array Methods (map(), filter(), reduce()):
These methods provide powerful ways to manipulate arrays with concise code.

- `map()`: Creates a new array by applying a function to each element of the original array.

```javascript
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

- `filter()`: Creates a new array with elements that pass a test specified by a function.

```javascript
let numbers = [1, 2, 3, 4, 5];
let evens = numbers.filter(num => num % 2 === 0); // [2, 4]
```

- `reduce()`: Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, num) => acc + num, 0); // 15
```

### Destructuring:
Destructuring allows for efficient assignment and extraction of values from objects and arrays.

- Object Destructuring:

```javascript
let person = { name: 'John', age: 30 };
let { name, age } = person;
console.log(name, age); // John 30
```

- Array Destructuring:
```javascript
let colors = ['red', 'green', 'blue'];
let [first, second] = colors;
console.log(first, second); // red green
```
### ES Modules:
ES Modules provide a modular structure for JavaScript code, allowing better organization and reuse of functionalities.

- Exporting:
```javascript
// module.js
export function add(a, b) {
    return a + b;
}

// Importing:
import { add } from './module.js';
```

This enables a more organized and scalable codebase by promoting encapsulation and reusability.
![[Pasted image 20240130122537.png]]
