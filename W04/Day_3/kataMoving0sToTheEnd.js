// Write an algorithm that takes an array and moves all of
// the zeros to the end, preserving the order of the other
// elements.

function moveZeros(arr) {
    let zeros = 0; 
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        zeros++;
      } else if (zeros > 0) {
        arr[i - zeros] = arr[i];
        arr[i] = 0;
      }
    }
    return arr;
  }

// Using methods 
function moveZerosPlus(arr) {
    return arr.filter( x => x !== 0).concat(arr.filter( x => x === 0));
}

console.log(moveZerosPlus([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // returns[false,1,1,2,1,3,"a",0,0]
console.log(moveZerosPlus([ 9, +0, 9, 1, 2, 1, 1, 3, 1, 9, +0, +0, 9, +0, +0, +0, +0, +0, +0, +0 ])); // returns[false,1,1,2,1,3,"a",0,0]
