## Loops
#### For Loop
- Syntax: `for (initialization; condition; update) { // code block }`
- Initialization is done once at the beginning.
- Condition is checked before each iteration.
- Update is executed after each iteration.
 - *Suitable when the number of iterations is known beforehand*.
#### While Loop
- Syntax: `while (condition) { // code block }`
- Condition is checked before each iteration.
- Initialization and update are usually done outside the loop.
- *Suitable when the number of iterations is not known beforehand, and the loop may not run at all if the condition is false from the start.*
#### Do-While Loop
- Syntax: `do { // code block } while (condition);`
- Similar to a while loop, but the code block is executed at least once because the condition is checked after the first iteration.
- *Useful when you want to ensure that the loop body runs at least once, regardless of the initial condition.* 
## Functions
Functions in JavaScript are reusable blocks of code that perform a specific task. They help in organizing code, promoting reusability, and enhancing maintainability.
#### Syntax
- **Function Declaration:**
  ```javascript
  function functionName(parameters) {
    // code to be executed
    return result; // If you don't use `return`, the function will return `undefined` by default.
  }
  ```
- **Function Expression:**
  ```javascript
  const functionName = function(parameters) {
    // code to be executed
    return result; // If you don't use `return`, the function will return `undefined` by default.
  };
  ```
- **Arrow Function (ES6+):**
  ```javascript
  const functionName = (parameters) => {
    // code to be executed
    return result; // If you don't use `return`, the function will return `undefined` by default.
  };
  ```

**Common Mistakes:**
1. **Not Returning a Value:**
   - Forgetting to use the `return` statement or not returning a value when the function is expected to produce one.
2. **Undefined Variables:**
   - Using variables inside a function without declaring them or ensuring they are in the scope.
3. **Hoisting Issues:**
   - Depending on function declarations being hoisted to the top of the script or function scope. (*var*)
4. **Not Handling Parameters:**
   - Ignoring function parameters or not handling them properly inside the function.
5. **Confusing Function Declarations and Expressions:**
   - Understanding the difference between function declarations and expressions, especially when it comes to hoisting.
6. **Arrow Function Pitfalls:**
   - Not handling the `this` context correctly in arrow functions, especially in object methods or event handlers.
#### Terms
- **Hoisting :** a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution
- **IIFE:** (Immediately Invoked Function Expression) is a _JavaScript_ function that runs as soon as it is defined.
  ```JS
(function () {
  // …
})(); // Goofy way

(() => { // (ES6)
  // …
})();
```
- **Parameter:** Variable inputs that you use in the function declaration.
- **Argument:** The actual values or expressions used when calling the function.

#### On importing modules
```JS
module.exports = { // Placed at the end of the export file
	functionOne,
	functionTwo,
	... 
}

const { functionName } = require('./PathtoFile')
```