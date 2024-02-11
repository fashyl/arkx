---
tsTitle: 
id: 1
tags:
  - type/troubleshooting
  - category/typescript
description: infering is weird.
solved: 
week: "[[]]"
links:
  - "[[]]"
resources: https://www.codecademy.com/courses/learn-typescript-fundamentals/projects/typemart
updated: 2024-02-06T00:50
dateCreated: 2024-02-05T20:37
---

# Issue #1 : On Destructuring 
## TypeScript/TypeMart : Finding the element

```ts
import products from "./products";
const productName:string = 'shirt';

const product = products.find(({ name }) => name === productName);
// ({}) Darori Destructuring, 3lach? 
```
Here's an example with and without destructuring to help understand why. First of all, `find` returns the *first* element in the provided array that satisfies the provided testing function. 

**Syntax**

```ts
const l'mo9alab3alayh = providedArray.find(providedFunciton)
```

Db f'dik l'providedFunction, assuming we are using arrow functions (ES6), the console displays an error when we don't use destructuring. 

In TypeScript, when you use destructuring in the parameter list of the `find` method like this:

```typescript
const product = products.find(({ name }) => name === productName);
```

You are telling TypeScript to **expect** each element of the `products` array to be an object with a `name` property. TypeScript **infers **the type of `name` based on the expected structure of each object within the array.

On the other hand, without destructuring:

```typescript
const product = products.find((product) => product.name === productName);
```

TypeScript does not automatically infer the structure of each object in the array. It only knows that each element of `products` is of the array type, and it doesn't automatically recognize the properties like `name` on each element.

**By using destructuring, you explicitly state the expected structure of the object within the array, allowing TypeScript to understand and infer the types correctly.**

**L'Kmala**
```ts
if ( product?.preOrder === 'true') { // ? y9rd ykoun 3amr wla khawi
  console.log("Element found and pending.") // bla `?`, TypeScript returns an error, since product can *possibly* be undefined.
} else {
  console.log("Element found and on the way.")
}
```
