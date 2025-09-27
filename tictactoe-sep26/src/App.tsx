import { useEffect, useRef, useState } from 'react'
import './App.css'
import { makeMove, initialState } from './tictactoe'

function App() {
  const [gameState, setGameState] = useState(initialState)

  const bgRef = useRef<HTMLAudioElement | null>(null)

  function makeGameMove(cellIndex: number) {
    if (!bgRef.current) {
      const bg = new Audio('/super-mario-music.mp3')
      bg.loop = true
      bg.volume = 0.5
      bg.play()
      bgRef.current = bg
    }

    const audio = new Audio('/mario-jump.mp3')
    audio.play()

    setGameState(prev => makeMove(prev, prev.player, cellIndex))
  }

  useEffect(() => {
    if (gameState.status === 'win') {
      const winSound = new Audio('/mario-win-stage.mp3')
      winSound.play()
      bgRef.current?.pause()
      bgRef.current = null
    }
  }, [gameState.status])

  useEffect(() => {
    return () => {
      if (bgRef.current) {
        bgRef.current.pause()
        bgRef.current.currentTime = 0
        bgRef.current = null
      }
    }
  }, [])

  return (
    <>
      <div className="flex flex-col w-120 h-120 justify-center items-center mt-20">
        {(gameState.status === 'in_progress') &&
          <>
            <h1 className='item-center text-black'>MARIO Tic Tac Toe</h1>
            <div className="grid grid-cols-3 aspect-square w-full">
              {gameState.board.map((cell, cellIndex) =>
                <button
                  key={cellIndex}
                  onClick={() => makeGameMove(cellIndex)}
                  className="m-2 p-0 w-36 h-36 border-8 border-red-600 bg-yellow-200">{cell}
                </button>)}
            </div>
          </>}
        {(gameState.status === 'in_progress') && <p className="text-2xl bg-white border-solid border-2 rounded mt-2 p-2">You're turn {gameState.player}! </p>}
        {(gameState.status === 'draw' && <div>DRAW!</div>)}
        {(gameState.status === 'win') &&
          <div className='flex flex-col justify-center items-center'>
            <h1 className='content-center'>{gameState.player}</h1>
            <h1 className="font-semibold text-black">You won</h1>
          </div>}
      </div>
    </>
  )
}

export default App
