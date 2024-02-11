---
aliases: 
tags:
  - type/concept
  - category/javascript
links:
  - "[[]]"
resources: 
updated: 2024-02-10T12:03
dateCreated: 2024-02-10T10:33
---
# Truthy Falsy
In [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript), a **truthy** value is a value that is considered `true` when encountered in a [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) context. All values are truthy unless they are defined as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). That is, all values are _truthy_ except `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`, and [`document.all`](https://developer.mozilla.org/en-US/docs/Web/API/Document/all).

# Ternary Operator
The **conditional (ternary) operator** is the only JavaScript operator that takes three operands: a condition followed by a question mark (`?`), then an expression to execute if the condition is [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) followed by a colon (`:`), and finally the expression to execute if the condition is [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy). This operator is frequently used as an alternative to an [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) statement.
## Conditional chains
The ternary operator is right-associative, which means it can be "chained" in the following way, similar to an `if … else if … else if … else` chain:
```js
function example() {
  return condition1 ? value1
    : condition2 ? value2
    : condition3 ? value3
    : value4;
}
```
This is equivalent to the following [`if...else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) chain.
```js
function example() {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```
>[!info]
> - Instead of specifying the action in each branch, we can pass the entire ternary as the argument.
>    Example : ` a % 2 === 0 ? console.log('even') : console.log('odd')`can we be instead written as `console.lo( a % 2 === 0 ? 'even' ? 'odd')
>

Ternaries have no *block demarcation*, but JS recognizes all blocks, even if they have no keyword or identifier associated. The following is valid code : 
```js
a % 2 === 0 ? {
    console.log(`${a} is even.`)
} : {
    console.log(`${a} is odd.`)
};
```