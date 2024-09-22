export default function Square({ item, onSquareClick, isWinningCell }) {
    return (
        <button
            className="square"
            onClick={onSquareClick}
            style={{
                backgroundColor: isWinningCell ? "lightgreen" : "white",
            }}
        >
            {item}
        </button>
    );
}
