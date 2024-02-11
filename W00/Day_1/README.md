Created in one week by Brendan Eich back in 1995, originally named MOCA. But marketing... 
### Running JS in the console
Javascript can run both in the **Browser** (Google Chrome, Mozilla Firefox, Opera . . .), and in the **Server** (directly on your machine) through [**Node.js**](https://nodejs.org/en)**.**

The `Eager evaluation` feature helps you write valid JavaScript.

### Variables
To declare variables in JavaScript we use one of the keywords `let` or `const` (for constants).

#### Data types
- **Numbers & Arithmetic :**
  - `===` Equal to ( value and type)
- **Strings**
  - Concatenation using `+`
  - Length using classes? `string.length`
  - Strings behave like arrays
  - Escape character `\`
- **Booleans, Null and Undefined**... 
! when in doubt, use `typeof` 

#### Conditionals
**if..else**
```JS
if (<condition>) {
    <Actions>
} else if (<condition>) {
    <Actions> 
} else {
    <Actions>
}
```
**Switch**
```JS
let lightColor = "green";

switch (lightColor){
    case "red":
        console.log("Stop!");
        break;
    case "yellow":
        console.log("Get ready to go!");
        break;
    case "green":
        console.log("Go!");
        break;
    default:
        console.log("Invalid traffic light color.");
```
**Ternary Operator**
```JS
// The syntax
<condition> ? <action if true> : <action if false>;

// Example
let age = 12;
age >= 18 ? console.log('You are old') : console.log('You are not old enough')
```
#### Truthy Falsy
JavaScript treats the following types of values as falsy:

**Truthy values:**
1. Numbers other than 0 (`1`, `2.5`, etc.).
2. Non-empty strings (`"hello"`, `'123'`, etc.).
3. Arrays and objects, even if they are empty (`[]`, `{}`).
4. Functions.

**Falsy values:**
1. The number `0`.
2. The empty string `""`.
3. `null`.
4. `undefined`.
5. `NaN` (Not a Number).
6. `false`.

#### Terms
- **Just-In-Time || Interpreted** : all code converts to machine code in parallel, then executed immediately
- **DOM** : If a webpage is a play, the DOM is the script that tells everyone what to do and when to do it!
