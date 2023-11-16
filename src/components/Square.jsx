const Square = ({value,onSquareClick}) => {
  return (
    <button style={{height:'80px',width:'80px',margin:'5px'}} onClick={onSquareClick} >{value}
    </button>
  )
}

export default Square