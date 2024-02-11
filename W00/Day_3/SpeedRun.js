let testMatrix = [[6, 83, -8], [12, 21, 0], [9, -18, 10]]
let testArray = [ 1, 3, 5, 89, 30, 0];

function sum(numbers) {
    let sum = 0;
    for (let row of numbers){ // for ( let i = 0; i < numbers.length; i++) 
        for (let element of row) { // for ( let j = 0; j < numbers[i].length; i++)
            sum += element; // sum += element[i][j]
        }
    }
    return sum;
}

function countEven(numbers) {
    let count = 0;
    for (let row of numbers){ // for ( let i = 0; i < numbers.length; i++) 
        for (let element of row) { // for ( let j = 0; j < numbers[i].length; i++)
            if ( element % 2 == 0) { count++ }; // element[i][j] instead of element
        }
    }
    return count;
}

function double(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }
    return numbers;
}

console.log(double(testArray));