import { useState } from "react"
import Square from "./Square"


const Board = () => {

  // set a array with length 9 and fill it up with null
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player,setPlayer]=useState('X')

  const calculateWinner = () => {
    const winCombo = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for (let i = 0; i < winCombo.length; i++){
      const [a, b, c] = winCombo[i]
      if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
        return squares[a]
      }
    }
  }

  const handleClick = (i) => {
    if (calculateWinner() || squares[i]) {
      return
    }
   const newSquares=[...squares]
    newSquares[i] = player
    setSquares(newSquares)
    setPlayer(player==='X'?"O":"X")
  }

  
  const handleReset = () => {
    setSquares(Array(9).fill(null))
  }

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