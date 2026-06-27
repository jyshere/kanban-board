import Column from "./Column";

export default function Board({ board ,addCard}) {
  return (
    <div className="board">
      {board.columns.map((column) => (
        <Column key={column.id} column={column} addCard={addCard} />
      ))}
    </div>
  );
}