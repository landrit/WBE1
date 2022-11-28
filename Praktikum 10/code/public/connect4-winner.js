function connect4Winner(player, board) {
  const rows = board.length
  const columns = board[0].length
  const conditionToWin = `${player}${player}${player}${player}`

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      if (fieldIsWinner(column, row)) return fieldIsWinner(column, row)
    }
  }
  return false

  function fieldIsWinner(column, row) {
    return (
      fieldIsWinnerVertical(column, row) ||
      fieldIsWinnerHorizontal(column, row) ||
      fieldIsWinnerDiagonalLeft(column, row) ||
      fieldIsWinnerDiagonalRight(column, row)
    )

    function fieldIsWinnerVertical(col, row) {
      let fields = ""
      for (let i = -3; i < 7; i++) {
        if (board[row + i]) fields += board[row + i][col]
      }
      return fields.includes(conditionToWin)
    }

    function fieldIsWinnerHorizontal(col, row) {
      let fields = ""
      for (let i = -3; i < 7; i++) {
        if (board[row][col + i]) fields += board[row][col + i]
      }
      return fields.includes(conditionToWin)
    }

    function fieldIsWinnerDiagonalLeft(col, row) {
      let fields = ""
      for (let i = 3; i > 0; i--) {
        if (board[row - i] && board[row - i][col - i]) {
          fields += board[row - i][col - i]
        }
      }
      fields += board[row][col]
      for (let i = 1; i <= 3; i++) {
        if (board[row + i] && board[row + i][col + i]) {
          fields += board[row + i][col + i]
        }
      }
      return fields.includes(conditionToWin)
    }

    function fieldIsWinnerDiagonalRight(col, row) {
      let fields = ""
      for (let i = 3; i > 0; i--) {
        if (board[row - i] && board[row - i][col + i]) {
          fields += board[row - i][col + i]
        }
      }
      fields += board[row][col]
      for (let i = 1; i <= 3; i++) {
        if (board[row + i] && board[row + i][col - i]) {
          fields += board[row + i][col - i]
        }
      }
      return fields.includes(conditionToWin)
    }
  }
}

module.exports = { connect4Winner }
