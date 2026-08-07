import { useState } from "react";
import Column from "./Column";

export default function Board({ board ,addCard, deleteCard,editCard,moveCard,addColumn}) {
  const[title,setTitle]=useState("");
  const handleAdd = () => {
    if (!text.trim()) return;

    addColumn( title.trim());
    setTitle("");
  };

  return (
    <div className="board">
      {board.columns.map((column) => (
        <Column 
        key={column.id} 
        column={column} 
        addCard={addCard} 
        deleteCard={deleteCard} 
        editCard={editCard}
        moveCard={moveCard}/>
      ))}
      
      {/* -------------new Column button---------- */}

      <div className="Board-input-area">
        <input
          className="add-column"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New column..."
        />

        <button className="add-column" onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
}