import { useState } from "react";
import Square from "./Square.jsx";
import { checkBoard } from "../services.js";

export default function Board() {
    const [board, setBoard] = useState(
        Array(3)
            .fill()
            .map(() => Array(3).fill(null))
    );
    const [xIsNext, setXIsNext] = useState(true);

    function handleClick(index, col) {
        const newBoard = board.map((row, rowInd) => {
            if (index === rowInd) {
                const newRow = row.map((el, colInd) => {
                    if (col === colInd && !el) {
                        return xIsNext ? "X" : "O";
                    } else {
                        return el;
                    }
                });
                setXIsNext(!xIsNext);
                return newRow;
            } else {
                return row;
            }
        });
        setBoard(newBoard);
        if (checkBoard(newBoard, index, col)) {
            const winner = xIsNext ? "X" : "O";
            alert(`The winner is player - ${winner}`);
        }
    }

    return (
        <div>
            {board.map((row, index) => (
                <div className="board-row" key={index}>
                    {row.map((item, col) => (
                        <Square
                            key={`${index}-${col}`}
                            item={item}
                            onSquareClick={() => handleClick(index, col)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
