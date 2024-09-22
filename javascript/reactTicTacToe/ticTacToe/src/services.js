export function checkBoard(board, index, col) {
    if (
        board[index][0] &&
        board[index][0] === board[index][1] &&
        board[index][1] === board[index][2]
    )
        return true;

    if (
        board[0][col] &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]
    )
        return true;

    if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
    )
        return true;

    if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
    )
        return true;

    return false;
}
