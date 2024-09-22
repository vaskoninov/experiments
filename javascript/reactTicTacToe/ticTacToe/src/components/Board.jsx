import { useState, useEffect } from "react";
import Square from "./Square.jsx";
import { checkBoard, checkBoardIsFull } from "../services.js";

export default function Board() {
    const [board, setBoard] = useState(
        Array(3)
            .fill()
            .map(() => Array(3).fill(null))
    );
    const [xIsNext, setXIsNext] = useState(true);
    const [winner, setWinner] = useState(null);
    const [winningCells, setWinningCells] = useState([]);
    const [boardFull, setBoardFull] = useState(false);

    function handleClick(index, col) {
        if (board[index][col] || winner) {
            return;
        }
        const newBoard = board.map((row) => [...row]);
        newBoard[index][col] = xIsNext ? "X" : "O";
        setXIsNext(!xIsNext);
        setBoard(newBoard);
        const winningCells = checkBoard(newBoard, index, col);
        if (winningCells) {
            const winner = xIsNext ? "X" : "O";
            setWinner(winner);
            setWinningCells(winningCells);
        }
        const boardIsFull = checkBoardIsFull(newBoard);
        if (boardIsFull) {
            setBoardFull(true);
        }
    }

    function handleRestart() {
        setBoard(
            Array(3)
                .fill()
                .map(() => Array(3).fill(null))
        );
        setWinner(null);
        setWinningCells([]);
        setXIsNext(true);
        setBoardFull(false);
    }

    return (
        <div>
            {winner && <h2>The winner is player {winner}!</h2>}
            {!winner && boardFull && <h2>It's a tie!</h2>}
            {!winner && !boardFull && (
                <h2>It is player {xIsNext ? "X" : "O"} turn</h2>
            )}
            {board.map((row, index) => (
                <div className="board-row" key={index}>
                    {row.map((item, col) => {
                        const isWinningCell = winningCells.some(
                            ([r, c]) => r === index && c === col
                        );
                        return (
                            <Square
                                key={`${index}-${col}`}
                                item={item}
                                onSquareClick={() => handleClick(index, col)}
                                isWinningCell={isWinningCell}
                            />
                        );
                    })}
                </div>
            ))}
            <button
                className="reset-button"
                type="submit"
                onClick={handleRestart}
            >
                Restart
            </button>
        </div>
    );
}
