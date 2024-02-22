/*
Create a function that checks wether 
the current TicTacToe board is solved.

    Assume that the board comes in the form of a 3x3 array,
    where the value is :
    0 if a spot is empty,
    1 if it is an "X", 
    or 2 if it is an "O", like so: 

    [[0, 0, 1],
    [0, 1, 2],
    [2, 1, 0]]

Return : 
    -1 if the board is not yet finished AND no one has won yet (there are empty spots),
    1 if "X" won,
    2 if "O" won,
    0 if it's a cat's game (i.e. a draw).

*/

// function isSolved(board) {
//    if (board[2][0] && board[1][1] && board[0][2] && board[2][0] == board[1][1] && board[1][1] == board[0][2]) return board[2][0]
//    if (board[0][0] && board[1][1] && board[2][2] && board[0][0] == board[1][1] && board[1][1] == board[2][2]) return board[0][0]
    

//    for (let i = 0; i < 3; i++) {
//       if (board[i][0] && board[i][1] && board[i][2] && board[i][0] == board[i][1] && board[i][1] == board[i][2]) return board[i][0]
//       if (board[0][i] && board[1][i] && board[2][i] && board[0][i] == board[1][i] && board[1][i] == board[2][i]) return board[0][i]
//    }

//    for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board.length; j++) {
//       if ( board[i][j] === 0 ) return -1;
//     }
//    }   
//   return 0;
// }

console.log(
  isSolved([[2,2,2],[0,1,1],[1,0,0]])
); // 2

// This is reaaaalllly clever
function isSolved(board) {
  board = board.join('-').replace(/,/g,''); // XXX-XXX-XXX
  // There are four winning cases. 
  // XXX -> Rows, three consecutive X 
  // X...X...X -> Columns, any sequence of X with 3 characters 'tween them
  // X....X....X -> The \ sequence : X..-.X.-..X
  // X..X..X -> The / sequence : ..X-.X.-X..
  if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
  if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
  if(/0/.test(board)) return -1;
  return 0;
}