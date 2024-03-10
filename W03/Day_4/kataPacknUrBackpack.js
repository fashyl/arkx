/*
    To make sure you're bringing your most valuable items on
    this journey you've decided to give all your items a score
    that represents how valuable this item is to you. It's your
    job to pack your bag so that you get the most value out of
    the items that you decide to bring.    

    For instance, given these inputs:
    scores = [15, 10, 9, 5]
    weights = [1, 5, 3, 4]
    capacity = 8

    The maximum score will be 29.
    This number comes from bringing 
    items 1, 3 and 4. 

*/
// // Brute Force ?
// function packBagpack(scores, weights, capacity) {
//     const results = new Array(2**scores.length).fill(0);
//     const populations = Array.from({ length: 2**scores.length }, (v, i) => i.toString(2).split(""));
//     for (let i = 0; i < populations.length; i++) {
//         let weight = 0;
//         for (let j = 0; j < populations[i].length; j++) {
//             if(populations[i][j] === '1') {
//                 results[i] += scores[j];
//                 weight += weights[j];
//             }
//         }
//         if (weight > capacity) results[i] = 0;
//     }
//     return Math.max(...results);
// } // works but fails to submit. 338ms

function packBagpack(scores, weights, capacity) {
  let maxScore = 0;
  function comibination(index, score, weight) {
    if (index === scores.length) {
      if (weight <= capacity) {
        maxScore = Math.max(maxScore, score);
      }
      return;
    }
    comibination( index + 1, score + scores[index], weight + weights[index]);
    comibination(index + 1, score, weight);
  }
  comibination(0, 0, 0);
  return maxScore;
} // RECURSIVE BACKTRACKING 96ms

// Testing
console.log(packBagpack([10, 20, 30], [2, 5, 8], 10))
console.log(packBagpack([15, 10, 9, 5], [1, 5, 3, 4], 8)); // 29
console.log(packBagpack([20, 5, 10, 40, 15, 25], [1, 2, 3, 8, 7, 4], 10)); // 60
console.log(
  packBagpack([20, 17, 6, 16, 10, 12, 3, 6, 8], [3, 5, 5, 1, 1, 2, 1, 2, 3], 18)
); // 92
