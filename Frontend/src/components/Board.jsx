import { useState } from "react";
import Column from "./Column";
import "./Board.css";

export default function Board({
  board,
  addCard,
  deleteCard,
  editCard,
  moveCard,
  addColumn,
  renameColumnTitle,
  deleteColumn,
}) {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const cleanedTitle = title.trim();

    if (!cleanedTitle) return;

    addColumn(cleanedTitle);
    setTitle("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="board">

      {/* Existing columns */}
      {board.columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          addCard={addCard}
          deleteCard={deleteCard}
          editCard={editCard}
          moveCard={moveCard}
          renameColumnTitle={renameColumnTitle}
          deleteColumn={deleteColumn}
        />
      ))}

      {/* Add new column */}
      <div className="add-column-area">

        <input
          className="add-column-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="New column..."
        />

        <button
          className="add-column-button"
          onClick={handleAdd}
        >
          Add
        </button>

      </div>

    </div>
  );
}