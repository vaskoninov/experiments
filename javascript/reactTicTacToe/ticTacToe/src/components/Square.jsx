export default function Square({ item, onSquareClick }) {
    return (
        <button className="square" onClick={onSquareClick}>
            {item}
        </button>
    );
}
