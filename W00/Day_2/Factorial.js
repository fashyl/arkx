let num = process.argv[2]; // call using node(0th argv) filename(1st argv) num(2nd argv)
// Your program
let factorial = 1;
for (let index = 1; index <= num; index++) {
    factorial *= index;
};

console.log(factorial);
// Output : 120