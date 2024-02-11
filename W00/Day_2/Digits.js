var num = process.argv[2]; // call using node(0th argv) filename(1st argv) num(2nd argv)

// Your program
let numDigits = 1;
let index = num;

if (index < 0) { index = -index};
while (index > 10) {
    index = index / 10;
    numDigits++;
};
console.log(numDigits);