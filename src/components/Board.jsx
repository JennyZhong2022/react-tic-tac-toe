import { useState } from "react"
import Square from "./Square"


const Board = () => {

  // set a array with length 9 and fill it up with null
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player,setPlayer]=useState('X')

  const calculateWinner = () => {
    const winningCombos = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
 // above is the ways to win, iterate them, give each one values to [a,b,c]. squares[a]is a player, if same player clicked winningCombos[i], won
    for (let i = 0; i < winningCombos.length; i++){
      const [a, b, c] = winningCombos[i]
      if (squares[a] && squares[b] === squares[c] && squares[a] === squares[b]) {
        return squares[a]
      }
    }
  }
  
  
  const handleClick = (i) => {
    // shallow copy
    const newSquares = [...squares];
    // make sure when the game has a winner, stop running the game. or the squares are occupied,return, no more further running.
    if (calculateWinner() || newSquares[i]) {
      return;
    }

    //give player value x or o to one square 
    newSquares[i] = player;
    // so squares "will be "newSqaures array 
    setSquares(newSquares);
    // switch player between x and o
    setPlayer(player=== "X"?"O":"X");
  };

  // reset to original squares to all null 
  const handleReset = () => {
    setSquares(Array(9).fill(null))
  }

  //find a winner
  const winner=calculateWinner()

  return (
    <> 
      <h2>{winner? `${winner} won`:'Game in Progress'}  </h2>
        <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <br />
      <button onClick={handleReset}>Reset</button>

  </>

  )
  
}

export default Board