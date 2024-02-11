let num = process.argv[2]; // call using node(0th argv) filename(1st argv) num(2nd argv)

for (let i = 1; i <= num; i+=2) {
let text = "";
    for (let j = 0; j < ((num - i)/2); j++) {
        text = text + " ";        
    }
    for (let k = 0; k < i; k++) { 
        text = text + "*";        
    }
console.log(text)
}

// Now the trunk, console.log(        |         )? nah
let trunk = "";
for (let j = 0; j < ((num - 1)/2); j++) {
    trunk = trunk + " ";     
}
console.log(trunk + "|");