/**
 * You have been speeding on a motorway and a police car had to stop you.
 * The policeman is a funny guy that likes to play games.
 * Before issuing penalty charge notice he gives you a choice to change your penalty.
 *
 * Your penalty charge is a combination of numbers like:
 * - speed of your car,
 * - speed limit in the area,
 * - speed of the police car chasing you,
 * - the number of police cars involved, etc.
 *
 * So, your task is to combine the given numbers and make the penalty charge to be as small as possible.
 * For example, if you are given numbers [45, 30, 50, 1] your best choice is 1304550
 */

// the length of a_list can vary betweem 2 and 20
// function penalty(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j][0] !== arr[j + 1][0]) {
//         if (arr[j][0] > arr[j + 1][0]) {
//           swap(arr, j, j + 1);
//         }
//       } else {
//         if (arr[j] + arr[j + 1] > arr[j + 1] + arr[j]) {
//           swap(arr, j, j + 1);
//         }
//       }
//     }
//   }
//   return arr.join("");
// }

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   return arr;
// }

// ,-, problem is, 
// I did reach that conclusion, (line 25)
function penalty(a_list) {
  return a_list.sort((a, b) => a + b > b + a ? 1 : -1).join('');
}

// console.log(heap(["A", "B", "C"], 3)); // === '1304550');
// console.log(heap(["A", "B", "C", "D"], 4)); // === '1304550');
console.log(penalty(["100", "10", "1"])); // === "100101");
console.log(penalty(["32", "3"])); // === "323");
console.log(penalty(["70", "46", "4", "19"])); // === "1944670");
console.log(penalty(["71", "82", "42", "34", "90"])); // === "3442718290");
console.log(penalty(["31", "97", "6", "78"])); // === "3167897");
