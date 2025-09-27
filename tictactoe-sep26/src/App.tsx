import { useState } from 'react'
import './App.css'
import { makeMove, initialState } from './tictactoe'


function App() {
  const [gameState, setGameState] = useState(initialState)

  function makeGameMove(cellIndex: number) {
    setGameState(prev => makeMove(prev, prev.player, cellIndex))
  }

  return (
    <>
      <div className="flex flex-col w-120 h-120 justify-center items-center mt-20">
        {(gameState.status === "in_progress") &&
          <>
            <h1 className='item-center text-black'>MARIO Tic Tac Toe</h1>
            <div className="grid grid-cols-3 aspect-square w-full">
              {gameState.board.map((cell, cellIndex) =>
                <button
                  onClick={() => makeGameMove(cellIndex)}
                  className="m-2 p-0 w-36 h-36 border-8 border-red-600 bg-yellow-200">{cell}
                </button>)}
            </div>
          </>}
        {(gameState.status === "in_progress") && <p className="text-2xl bg-white border-solid border-2 rounded mt-2 p-2">You're turn {gameState.player}! </p>}
        {(gameState.status === "draw" && <div>DRAW!</div>)}
        {(gameState.status === "win") &&
          <div className='flex flex-col justify-center items-center'>
            <h1 className='content-center'>{gameState.player}</h1>
            <h1 className="font-semibold text-black">You won</h1>
          </div>}
      </div>
    </>
  )
}

export default App
