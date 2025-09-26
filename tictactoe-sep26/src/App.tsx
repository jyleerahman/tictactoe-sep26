import { useState } from 'react'
import './App.css'
import { makeMove, initialState, type GameState } from './tictactoe'


function App() {
  console.log(initialState)
  return (
    <>
      <h1>👾 Tic Tac Toe 👾</h1>
      <div className="grid grid-cols-3 aspect-square">
        {initialState.board.map(b =>
          <button onClick={(makeMove)} className="bg-green-100 m-1 border">{b}</button>)}
      </div>
    </>
  )
}

export default App
