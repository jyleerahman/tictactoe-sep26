type Cell = "X" | "O" | null
type Player = "X" | "O"
type Board = Cell[]
type Status = "in_progress" | "win" | "draw"

type GameState = {
    board: Board,
    player: Player,
    status: Status
}

const initialState: GameState = {
    board: [null, null, null, null, null, null, null, null, null],
    player: "O",
    status: "in_progress"
}

function makeMove(game: GameState, player: Player, move: number) {
    if (game.board[move] !== null) return game
    const newGame: GameState = {
        board: [...game.board],
        player: game.player,
        status: game.status
    }
    newGame.board[move] = player

    function checkWinning() {
        const winningLines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
        for (const line of winningLines) {
            const [a, b, c] = line
            if (game.board[a] != null && game.board[a] === game.board[b] && game.board[b] === game.board[c]) {
                return game.status = "win"
            }
        }
        if (game.board.every(cell => cell != null)) return game.status = "draw"
        if (game.status != "win" && "draw") return "in_progress"
    }

    checkWinning()
    newGame.player = (newGame.player === "O" ? "X" : "O")

    return newGame
}

export { type GameState, initialState, makeMove }