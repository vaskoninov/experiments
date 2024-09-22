export function checkBoard(board, index, col) {
    if (
        board[index][0] &&
        board[index][0] === board[index][1] &&
        board[index][1] === board[index][2]
    )
        return [
            [index, 0],
            [index, 1],
            [index, 2],
        ];

    if (
        board[0][col] &&
        board[0][col] === board[1][col] &&
        board[1][col] === board[2][col]
    )
        return [
            [0, col],
            [1, col],
            [2, col],
        ];

    if (
        board[0][0] &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
    )
        return [
            [0, 0],
            [1, 1],
            [2, 2],
        ];

    if (
        board[0][2] &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
    )
        return [
            [0, 2],
            [1, 1],
            [2, 0],
        ];

    return null;
}

export function checkBoardIsFull(board) {
    return board.flat().every((el) => el !== null);
}
