// Complete the function that
// - accepts two integer arrays of equal length
// - compares the value of each member in one array 
//   to the corresponding member in the other
// - squares the absolute value difference between those two values
// - and returns the average of those squared absolute value difference between each member pair.

var solution = function(firstArray, secondArray) {
    let differences2 = 0;
    for (let i = 0; i < firstArray.length; i++) {
        differences2 += (firstArray[i] - secondArray[i]) ** 2
    }
    return  differences2 / firstArray.length
}

// one liner cuz why not
var solutionPlus = function(first, second) {
    return second.reduce((acc,_ ,i) => acc += (first[i]-second[i]) **2,0)/first.length
}

console.log(solutionPlus([1,2,3],[4,5,6])); // 9
console.log(solutionPlus([10,20,10,2],[10,25,5,-2])); // 16.5
console.log(solutionPlus([0,-1], [-1,0])); // 1