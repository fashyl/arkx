const {factorial} = require("./Functions.js");
function combinator(n, p) {
        return factorial(n) / (factorial (p) * factorial(n-p))
}// 10

console.log(combinator(5,2)) // n > p 