import { useState } from "react";
import Board from "./Board";

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const [isAscending, setIsAscending] = useState(true);
  const isXNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  
  function handlePLay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function flipOrder() {
    setIsAscending(!isAscending);
  }

  const moves = history.map((squares, move) => {
    let description;
    move > 0 ? description = `Go to move #${move}` : description = `Go to move #0`;
    return (<li key={move}><button onClick={() => jumpTo(move)}>{description}</button></li>);
  })

  const display = isAscending ? moves : moves.slice().reverse();

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={currentSquares} onPlay={handlePLay} isXNext={isXNext} />
      </div>
      <div className="game-info">
        <ol>{display}</ol>
      </div>
      <div className="sort-toggle">
        <button onClick={flipOrder}>Sort moves</button>
      </div>
    </div>
  );
}
