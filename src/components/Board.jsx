import { useState } from "react";
import Column from "./Column";

export default function Board({ board ,addCard, deleteCard,editCard,moveCard,addColumn,renameColumnTitle,deleteColumn}) {
  const[title,setTitle]=useState("");
  
 const handleAdd = () => {
    const cleanedTitle = title.trim();

    if (!cleanedTitle) return;

    addColumn(cleanedTitle);
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
        moveCard={moveCard}
        renameColumnTitle={renameColumnTitle}
        deleteColumn={deleteColumn}
        />
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