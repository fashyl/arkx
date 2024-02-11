// function bubbleSort(array) {
//   let n = array.length;
//   do {
//     newn = 0;
//     for (let j = 0; j < n - 1; j++) {
//       console.log(array);
//       console.log("j : " + j + " : " + array[j])
//       if (array[j] > array[j + 1]) { 
//         temp = array[j]; 
//         array[j] = array[j + 1];
//         array[j + 1] = temp;
//         newn = j;
//       }
//     }
//     n = newn;
//   } while (n > 1);
// }

function bubbleSort(array) {
let swap;
do {
  swap = false;
    for (i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) { 
        temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp
        swap = true;
        }
      }
    } while(swap);
  return array;  
}

module.exports = {
  bubbleSort
}