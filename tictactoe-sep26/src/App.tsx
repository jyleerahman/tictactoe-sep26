import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let board = ["null", "null", "null", "null", "null", "null", "null", "null", "null"]

  return (
    <>
      <h1>👾 Tic Tac Toe 👾</h1>
      <div className="grid grid-cols-3 aspect-square">{board.map(b => <div className="bg-green-100 p-5 border">{b}</div>)}</div>
    </>
  )
}

export default App
