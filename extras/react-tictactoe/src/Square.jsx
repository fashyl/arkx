export default function Square({ value, onSquareClick, isWinner }) {
    return (
      <button className="square" onClick={onSquareClick} style={ isWinner ? {background: 'green'}: {}}>
        {value}
      </button>
    );
  }
