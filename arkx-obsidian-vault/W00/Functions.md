---
dateCreated: 2024-02-10T16:12
updated: 2024-02-11T11:37
description: Functions are reusable pieces of code that perform tasks, process data, and possibly return values.
tags:
  - type/concept
  - category/javascript
links:
  - "[[]]"
resources: 
---
## Definition
- **Function Declaration** : `function Identifier( parameter1, parameter2) { // Code }`
- **Function Expression** : `const Identifier = function(parameter1, parameter2) { // Code }`
- **ES6 Arrow Function** : `const Identifier = ( parameter1, parameter2 ) => { // Code }`
## Parameters and Arguments
>[!Question] What is the difference between parameters and arguments ?
> [](https://stackoverflow.com/posts/156787/timeline) A parameter is a variable in a method definition. When a method is called, the arguments are the data you pass into the method's parameters.

![[function_parameters.svg|550]]

## Default Parameters
Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is `undefined` when called.
```js
function greeting (name = 'stranger') {
  console.log(`Hello, ${name}!`)
}

greeting('Nick') // Output: Hello, Nick!
greeting() // Output: Hello, stranger!
```
## Return keyword
When a function is called, the computer will run through the function’s code and evaluate the result. By default, the resulting aka *return* value is `undefined`.
## Helper Functions
We can also use the return value of a function inside another function. These [functions](https://www.codecademy.com/resources/docs/javascript/functions) being called within another function are often referred to as _helper functions_. Since each function is carrying out a specific task, it makes our code easier to read and debug if necessary.
## Concise Body Arrow Functions
1. Functions that take only a single parameter do not need that parameter to be enclosed in parentheses. However, if a function takes zero or multiple parameters, parentheses are required.
   
	   ![[Pasted image 20240210170151.png]]
1. A function body composed of a single-line block does not need curly braces. Without the curly braces, whatever that line evaluates will be automatically returned. The contents of the block should immediately follow the arrow and the `return` keyword can be removed. This is referred to as _implicit return_.
   
	   ![[Pasted image 20240210170159.png]]
