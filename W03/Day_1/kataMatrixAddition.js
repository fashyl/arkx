function matrixAddition(a, b) {
  result = [];
  for (let i = 0; i < a.length; i++) {
    result.push([]);
    for (let j = 0; j < a.length; j++) {
      console.log(a[i][j]+ '+' + b[i][j])
      result[i].push(a[i][j] + b[i][j]);  
    }
  }
  return result;
}

/* N9AAA
function matrixAddition(a, b){
  return a.map((n, i) => {
    return n.map((o, j) => {
      return o + b[i][j];
    });
  });
}
*/

console.log(
  matrixAddition(
    [
      [1, 2, 3],
      [3, 2, 1],
      [1, 1, 1],
    ],
    //      +
    [
      [2, 2, 1],
      [3, 2, 3],
      [1, 1, 3],
    ]
  )
);
