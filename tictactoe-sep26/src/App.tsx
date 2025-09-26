import { useState } from 'react'
import './App.css'
import { makeMove, initialState, type GameState } from './tictactoe'


function App() {
  const [gameState, setGameState] = useState(initialState)

  function makeGameMove(cellIndex: number) {
    setGameState(prev => makeMove(prev, prev.player, cellIndex))
  }

  return (
    <>
      <h1>👾 Tic Tac Toe 👾</h1>
      <div className="grid grid-cols-3 aspect-square">
        {gameState.board.map((cell, cellIndex) =>
          <button
            onClick={() => makeGameMove(cellIndex)}
            className="bg-green-100 m-1 border">{cell}
          </button>)}
        <div>Your Turn: {gameState.player}</div>
        {(gameState.status === "win") && <div>You won {gameState.player}🥇</div>}
      </div>
    </>
  )
}

export default App
