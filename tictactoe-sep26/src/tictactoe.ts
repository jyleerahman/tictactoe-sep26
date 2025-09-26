type Cell = "X" | "O" | null
type Player = "X" | "O"
type Board = Cell[]
type Status = "in_progress" | "win" | "draw"
type Winner = Player | null

type GameState = {
    board: Board,
    player: Player,
    status: Status,
    winner?: Winner
}

const initialState: GameState = {
    board: [null, null, null, null, null, null, null, null, null],
    player: "O",
    status: "in_progress",
    winner: null
}

function makeMove(game: GameState, player: Player, move: number) {
    if (game.board[move] !== null) return game
    if (game.status !== "in_progress") return game

    const newGame: GameState = {
        board: [...game.board],
        player: game.player,
        status: game.status
    }

    newGame.board[move] = player === 'O' ? 'X' : 'O'

    function checkWinning() {
        const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        for (const line of winningLines) {
            const [a, b, c] = line
            if (newGame.board[a] != null && newGame.board[a] === newGame.board[b] && newGame.board[b] === newGame.board[c]) {
                newGame.status = "win"
                newGame.winner = player
            }
        }
        if (newGame.board.every(cell => cell != null)) newGame.status = "draw"
        if (newGame.status != "win" && "draw") newGame.status = "in_progress"
    }
    newGame.player = newGame.player === "O" ? "X" : "O"
    checkWinning()


    return newGame
}

export { type GameState, initialState, makeMove }