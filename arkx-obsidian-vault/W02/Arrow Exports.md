---
aliases: 
tags:
  - type/concept
  - category/nodejs
links:
  - "[[NodeJS]]"
resources: https://stackoverflow.com/questions/52425643/node-js-export-a-normal-function-or-arrow-function
updated: 2024-02-08T16:52
dateCreated: 2024-02-08T16:49
---
# Arrow Exports

```js
function add(){}
function substract(){}

// Traditionaly
module.exports = { add, substract}

// New way (CommonJS)
exports.add = (x, y) => { return x + y };
exports.substract = (x, y) => { return x - y }

// ES6
export const Foo = () => console.log('I am Foo');

```