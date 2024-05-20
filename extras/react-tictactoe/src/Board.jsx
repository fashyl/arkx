import Square from "./Square";

export default function Board({ squares, isXNext, onPlay }) {
  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) return;
    const array = squares.slice();
    isXNext ? (array[index] = "X") : (array[index] = "O");
    onPlay(array);
  }

  const finished = calculateWinner(squares);
  let status;
  if (finished) {
    status = "Winner: " + finished.winner;
  } else if (squares.every((v) => v)) {
    status = "DRAW!";
  } else {
    status = "Next player: " + (isXNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      {Array.from({ length: 3 }).map((_, rindex) => (
        <div key={rindex} className="board-row">
          {Array.from({ length: 3 }).map((_, sindex) => (
            <Square
              key={`${rindex}-${sindex}`}
              isWinner={ finished ? finished.winSquares.includes(rindex * 3 + sindex) : false}
              value={squares[rindex * 3 + sindex]}
              onSquareClick={() => handleClick(rindex * 3 + sindex)}
            />
          ))}
        </div>
      ))}
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winSquares: lines[i], winner: squares[a]};
    }
  }
  return null;
}
